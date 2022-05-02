/* eslint-disable */
import * as Types from '../../../../graphql/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DashboardQueryVariables = Types.Exact<{ [key: string]: never }>;

export type DashboardQuery = {
  __typename?: 'Query';
  dashboard: {
    __typename?: 'Dashboard';
    freeSpace: number;
    torrents: number;
    files: number;
    version: string;
    downloaded: number;
    uploaded: number;
  };
};

export const DashboardDocument = gql`
  query Dashboard {
    dashboard {
      freeSpace
      torrents
      files
      version
      downloaded
      uploaded
    }
  }
`;

/**
 * __useDashboardQuery__
 *
 * To run a query within a React component, call `useDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<DashboardQuery, DashboardQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DashboardQuery, DashboardQueryVariables>(
    DashboardDocument,
    options
  );
}
export function useDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardQuery,
    DashboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DashboardQuery, DashboardQueryVariables>(
    DashboardDocument,
    options
  );
}
export type DashboardQueryHookResult = ReturnType<typeof useDashboardQuery>;
export type DashboardLazyQueryHookResult = ReturnType<
  typeof useDashboardLazyQuery
>;
export type DashboardQueryResult = Apollo.QueryResult<
  DashboardQuery,
  DashboardQueryVariables
>;
