import { useEffect } from 'react';

import {
  TorrentsUpdatesDocument,
  TorrentsUpdatesSubscription,
  useTorrentsQuery,
} from '../../graphql';

export const useTorrents = () => {
  const { data, subscribeToMore } = useTorrentsQuery();

  useEffect(() => {
    subscribeToMore<TorrentsUpdatesSubscription>({
      document: TorrentsUpdatesDocument,
      updateQuery: (prev, { subscriptionData }) => {
        const { data } = subscriptionData;
        if (!data) return prev;

        const { torrents } = prev;
        const { torrentsUpdate } = data;
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

  return {
    torrents: data?.torrents || [],
  };
};
