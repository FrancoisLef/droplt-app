/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
