import pretty from 'pretty-bytes';
import { useEffect } from 'react';

import {
  TorrentsUpdatesDocument,
  TorrentsUpdatesSubscription,
  useTorrentsQuery,
} from '../../graphql';

const HomePage: React.FC = () => {
  const { data, subscribeToMore } = useTorrentsQuery();

  useEffect(() => {
    subscribeToMore<TorrentsUpdatesSubscription>({
      document: TorrentsUpdatesDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const { torrents } = prev;
        const {
          data: { torrentsUpdate },
        } = subscriptionData;

        return {
          ...prev,
          torrents: torrents.map((torrent) => {
            const isMatchingUpdate = torrentsUpdate.find(
              (t) => t.torrentId === torrent.torrentId
            );
            if (isMatchingUpdate) {
              return {
                ...torrent,
                ...isMatchingUpdate,
              };
            }
            return torrent;
          }, []),
        };
      },
    });
  }, [subscribeToMore]);

  return (
    <div>
      {data?.torrents.map((torrent) => (
        <div key={torrent.torrentId}>
          <div>{torrent.name}</div>
          <div>{pretty(torrent.downloaded)}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
