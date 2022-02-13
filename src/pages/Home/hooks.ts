import {
  // TorrentsUpdatesDocument,
  // TorrentsUpdatesSubscription,
  useTorrentsQuery,
} from '../../graphql';
import { SORT_URL_PARAMS } from '../../helpers/sorting';

export const useTorrents = (searchParams: URLSearchParams) => {
  const sortBy = searchParams.get(SORT_URL_PARAMS.SORT_BY) || 'addedAt';
  const sortDirection =
    searchParams.get(SORT_URL_PARAMS.SORT_DIRECTION) || 'desc';

  const orderBy = {
    [sortBy]: sortDirection,
  };

  const { data } = useTorrentsQuery({
    variables: {
      orderBy,
    },
  });

  // useEffect(() => {
  //   subscribeToMore<TorrentsUpdatesSubscription>({
  //     document: TorrentsUpdatesDocument,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       const { data } = subscriptionData;
  //       if (!data) return prev;

  //       const { torrents } = prev;
  //       const { torrentsUpdate } = data;
  //       return {
  //         ...prev,
  //         torrents: torrents.map((torrent) => {
  //           const isMatchingUpdate = torrentsUpdate.find(
  //             (t) => t.torrentId === torrent.torrentId
  //           );
  //           if (isMatchingUpdate) {
  //             return {
  //               ...torrent,
  //               ...isMatchingUpdate,
  //             };
  //           }
  //           return torrent;
  //         }, []),
  //       };
  //     },
  //   });
  // }, [subscribeToMore]);

  return {
    torrents: data?.torrents || [],
  };
};
