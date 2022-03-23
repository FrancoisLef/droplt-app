import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  downloaded: Scalars['Float'];
  files: Scalars['Float'];
  freeSpace: Scalars['Float'];
  torrents: Scalars['Float'];
  uploaded: Scalars['Float'];
  version: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dashboard: Dashboard;
  torrents: Array<Torrent>;
};

export type Torrent = {
  __typename?: 'Torrent';
  _count?: Maybe<TorrentCount>;
  addedAt: Scalars['DateTime'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  downloaded: Scalars['Float'];
  eta?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  path: Scalars['String'];
  progress: Scalars['Float'];
  ratio: Scalars['Float'];
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  uploaded: Scalars['Float'];
};

export type TorrentCount = {
  __typename?: 'TorrentCount';
  files: Scalars['Int'];
};

export type DashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type DashboardQuery = { __typename?: 'Query', dashboard: { __typename?: 'Dashboard', freeSpace: number, torrents: number, files: number, version: string, downloaded: number, uploaded: number } };

export type TorrentsQueryVariables = Exact<{ [key: string]: never; }>;


export type TorrentsQuery = { __typename?: 'Query', torrents: Array<{ __typename?: 'Torrent', torrentId: string, name: string, size: number, progress: number, addedAt: any }> };


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
export function useDashboardQuery(baseOptions?: Apollo.QueryHookOptions<DashboardQuery, DashboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options);
      }
export function useDashboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashboardQuery, DashboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options);
        }
export type DashboardQueryHookResult = ReturnType<typeof useDashboardQuery>;
export type DashboardLazyQueryHookResult = ReturnType<typeof useDashboardLazyQuery>;
export type DashboardQueryResult = Apollo.QueryResult<DashboardQuery, DashboardQueryVariables>;
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
export function useTorrentsQuery(baseOptions?: Apollo.QueryHookOptions<TorrentsQuery, TorrentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TorrentsQuery, TorrentsQueryVariables>(TorrentsDocument, options);
      }
export function useTorrentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TorrentsQuery, TorrentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TorrentsQuery, TorrentsQueryVariables>(TorrentsDocument, options);
        }
export type TorrentsQueryHookResult = ReturnType<typeof useTorrentsQuery>;
export type TorrentsLazyQueryHookResult = ReturnType<typeof useTorrentsLazyQuery>;
export type TorrentsQueryResult = Apollo.QueryResult<TorrentsQuery, TorrentsQueryVariables>;