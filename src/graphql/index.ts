import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  torrents: Array<Torrent>;
  users: Array<User>;
};


export type QueryTorrentsArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Torrent = {
  __typename?: 'Torrent';
  createdAt: Scalars['DateTime'];
  hash: Scalars['String'];
  name: Scalars['String'];
  percentDone: Scalars['String'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  totalSize: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TorrentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentDone?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  totalSize?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TorrentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Hash = 'hash',
  Name = 'name',
  PercentDone = 'percentDone',
  Status = 'status',
  TorrentId = 'torrentId',
  TotalSize = 'totalSize',
  UpdatedAt = 'updatedAt'
}

export type TorrentWhereInput = {
  AND?: InputMaybe<Array<TorrentWhereInput>>;
  NOT?: InputMaybe<Array<TorrentWhereInput>>;
  OR?: InputMaybe<Array<TorrentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  hash?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  percentDone?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  torrentId?: InputMaybe<StringFilter>;
  totalSize?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TorrentWhereUniqueInput = {
  hash?: InputMaybe<Scalars['String']>;
  torrentId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  IsDisabled = 'isDisabled',
  LastName = 'lastName',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  isDisabled?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type TorrentsQueryVariables = Exact<{ [key: string]: never; }>;


export type TorrentsQuery = { __typename?: 'Query', torrents: Array<{ __typename?: 'Torrent', torrentId: string, hash: string, name: string, percentDone: string, status: string, createdAt: any, updatedAt: any }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', userId: string, email: string, firstName: string, lastName: string, isDisabled: boolean, createdAt: any, updatedAt: any }> };


export const TorrentsDocument = gql`
    query Torrents {
  torrents {
    torrentId
    hash
    name
    percentDone
    status
    createdAt
    updatedAt
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
export const UsersDocument = gql`
    query Users {
  users {
    userId
    email
    firstName
    lastName
    isDisabled
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;