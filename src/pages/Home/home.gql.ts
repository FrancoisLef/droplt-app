/* eslint-disable */
import * as Types from '../../graphql/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TorrentsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TorrentsQuery = {
  __typename?: 'Query';
  torrents: Array<{
    __typename?: 'Torrent';
    torrentId: string;
    name: string;
    size: number;
    progress: number;
    addedAt: any;
  }>;
};

export const TorrentsDocument = gql`
  query Torrents {
    torrents {
      torrentId
      name
      size
      progress
      addedAt
    }
  }
`;

/**
 * __useTorrentsQuery__
 *
 * To run a query within a React component, call `useTorrentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTorrentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTorrentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTorrentsQuery(
  baseOptions?: Apollo.QueryHookOptions<TorrentsQuery, TorrentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TorrentsQuery, TorrentsQueryVariables>(
    TorrentsDocument,
    options
  );
}
export function useTorrentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TorrentsQuery,
    TorrentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TorrentsQuery, TorrentsQueryVariables>(
    TorrentsDocument,
    options
  );
}
export type TorrentsQueryHookResult = ReturnType<typeof useTorrentsQuery>;
export type TorrentsLazyQueryHookResult = ReturnType<
  typeof useTorrentsLazyQuery
>;
export type TorrentsQueryResult = Apollo.QueryResult<
  TorrentsQuery,
  TorrentsQueryVariables
>;
