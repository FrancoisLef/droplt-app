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

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTorrent = {
  __typename?: 'AggregateTorrent';
  _avg?: Maybe<TorrentAvgAggregate>;
  _count?: Maybe<TorrentCountAggregate>;
  _max?: Maybe<TorrentMaxAggregate>;
  _min?: Maybe<TorrentMinAggregate>;
  _sum?: Maybe<TorrentSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
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

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTorrent: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createTorrent: Torrent;
  createUser: User;
  deleteManyTorrent: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteTorrent?: Maybe<Torrent>;
  deleteUser?: Maybe<User>;
  updateManyTorrent: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateTorrent?: Maybe<Torrent>;
  updateUser?: Maybe<User>;
  upsertTorrent: Torrent;
  upsertUser: User;
};


export type MutationCreateManyTorrentArgs = {
  data: Array<TorrentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTorrentArgs = {
  data: TorrentCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyTorrentArgs = {
  where?: InputMaybe<TorrentWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteTorrentArgs = {
  where: TorrentWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyTorrentArgs = {
  data: TorrentUpdateManyMutationInput;
  where?: InputMaybe<TorrentWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateTorrentArgs = {
  data: TorrentUpdateInput;
  where: TorrentWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertTorrentArgs = {
  create: TorrentCreateInput;
  update: TorrentUpdateInput;
  where: TorrentWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
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

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
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

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTorrent: AggregateTorrent;
  aggregateUser: AggregateUser;
  findFirstTorrent?: Maybe<Torrent>;
  findFirstUser?: Maybe<User>;
  groupByTorrent: Array<TorrentGroupBy>;
  groupByUser: Array<UserGroupBy>;
  torrent?: Maybe<Torrent>;
  torrents: Array<Torrent>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateTorrentArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstTorrentArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByTorrentArgs = {
  by: Array<TorrentScalarFieldEnum>;
  having?: InputMaybe<TorrentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryTorrentArgs = {
  where: TorrentWhereUniqueInput;
};


export type QueryTorrentsArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  torrentsUpdate: Array<Torrent>;
};

export type Torrent = {
  __typename?: 'Torrent';
  _count?: Maybe<TorrentCount>;
  addedAt: Scalars['DateTime'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  downloaded: Scalars['Float'];
  eta?: Maybe<Scalars['Float']>;
  hash: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  progress: Scalars['Float'];
  ratio: Scalars['Float'];
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  transmissionId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  uploaded: Scalars['Float'];
};

export type TorrentAvgAggregate = {
  __typename?: 'TorrentAvgAggregate';
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  transmissionId?: Maybe<Scalars['Float']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentAvgOrderByAggregateInput = {
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentCount = {
  __typename?: 'TorrentCount';
  files: Scalars['Int'];
};

export type TorrentCountAggregate = {
  __typename?: 'TorrentCountAggregate';
  _all: Scalars['Int'];
  addedAt: Scalars['Int'];
  completedAt: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  downloaded: Scalars['Int'];
  eta: Scalars['Int'];
  hash: Scalars['Int'];
  isDeleted: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  progress: Scalars['Int'];
  ratio: Scalars['Int'];
  size: Scalars['Int'];
  status: Scalars['Int'];
  torrentId: Scalars['Int'];
  transmissionId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  uploaded: Scalars['Int'];
};

export type TorrentCountOrderByAggregateInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentCreateInput = {
  addedAt: Scalars['DateTime'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  eta?: InputMaybe<Scalars['Float']>;
  files?: InputMaybe<TorrentFileCreateNestedManyWithoutTorrentInput>;
  hash: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  path: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  ratio?: InputMaybe<Scalars['Float']>;
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId?: InputMaybe<Scalars['String']>;
  transmissionId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uploaded?: InputMaybe<Scalars['Float']>;
};

export type TorrentCreateManyInput = {
  addedAt: Scalars['DateTime'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  eta?: InputMaybe<Scalars['Float']>;
  hash: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  path: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  ratio?: InputMaybe<Scalars['Float']>;
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId?: InputMaybe<Scalars['String']>;
  transmissionId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uploaded?: InputMaybe<Scalars['Float']>;
};

export type TorrentFileCreateManyTorrentInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  size: Scalars['Float'];
  torrentFileId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TorrentFileCreateManyTorrentInputEnvelope = {
  data: Array<TorrentFileCreateManyTorrentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TorrentFileCreateNestedManyWithoutTorrentInput = {
  connect?: InputMaybe<Array<TorrentFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TorrentFileCreateOrConnectWithoutTorrentInput>>;
  create?: InputMaybe<Array<TorrentFileCreateWithoutTorrentInput>>;
  createMany?: InputMaybe<TorrentFileCreateManyTorrentInputEnvelope>;
};

export type TorrentFileCreateOrConnectWithoutTorrentInput = {
  create: TorrentFileCreateWithoutTorrentInput;
  where: TorrentFileWhereUniqueInput;
};

export type TorrentFileCreateWithoutTorrentInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  size: Scalars['Float'];
  torrentFileId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TorrentFileListRelationFilter = {
  every?: InputMaybe<TorrentFileWhereInput>;
  none?: InputMaybe<TorrentFileWhereInput>;
  some?: InputMaybe<TorrentFileWhereInput>;
};

export type TorrentFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TorrentFileScalarWhereInput = {
  AND?: InputMaybe<Array<TorrentFileScalarWhereInput>>;
  NOT?: InputMaybe<Array<TorrentFileScalarWhereInput>>;
  OR?: InputMaybe<Array<TorrentFileScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  downloaded?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  torrentFileId?: InputMaybe<StringFilter>;
  torrentId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TorrentFileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  torrentFileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TorrentFileUpdateManyWithWhereWithoutTorrentInput = {
  data: TorrentFileUpdateManyMutationInput;
  where: TorrentFileScalarWhereInput;
};

export type TorrentFileUpdateManyWithoutTorrentInput = {
  connect?: InputMaybe<Array<TorrentFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TorrentFileCreateOrConnectWithoutTorrentInput>>;
  create?: InputMaybe<Array<TorrentFileCreateWithoutTorrentInput>>;
  createMany?: InputMaybe<TorrentFileCreateManyTorrentInputEnvelope>;
  delete?: InputMaybe<Array<TorrentFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TorrentFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TorrentFileWhereUniqueInput>>;
  set?: InputMaybe<Array<TorrentFileWhereUniqueInput>>;
  update?: InputMaybe<Array<TorrentFileUpdateWithWhereUniqueWithoutTorrentInput>>;
  updateMany?: InputMaybe<Array<TorrentFileUpdateManyWithWhereWithoutTorrentInput>>;
  upsert?: InputMaybe<Array<TorrentFileUpsertWithWhereUniqueWithoutTorrentInput>>;
};

export type TorrentFileUpdateWithWhereUniqueWithoutTorrentInput = {
  data: TorrentFileUpdateWithoutTorrentInput;
  where: TorrentFileWhereUniqueInput;
};

export type TorrentFileUpdateWithoutTorrentInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  torrentFileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TorrentFileUpsertWithWhereUniqueWithoutTorrentInput = {
  create: TorrentFileCreateWithoutTorrentInput;
  update: TorrentFileUpdateWithoutTorrentInput;
  where: TorrentFileWhereUniqueInput;
};

export type TorrentFileWhereInput = {
  AND?: InputMaybe<Array<TorrentFileWhereInput>>;
  NOT?: InputMaybe<Array<TorrentFileWhereInput>>;
  OR?: InputMaybe<Array<TorrentFileWhereInput>>;
  Torrent?: InputMaybe<TorrentRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  downloaded?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  torrentFileId?: InputMaybe<StringFilter>;
  torrentId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TorrentFileWhereUniqueInput = {
  torrentFileId?: InputMaybe<Scalars['String']>;
};

export type TorrentGroupBy = {
  __typename?: 'TorrentGroupBy';
  _avg?: Maybe<TorrentAvgAggregate>;
  _count?: Maybe<TorrentCountAggregate>;
  _max?: Maybe<TorrentMaxAggregate>;
  _min?: Maybe<TorrentMinAggregate>;
  _sum?: Maybe<TorrentSumAggregate>;
  addedAt: Scalars['DateTime'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  downloaded: Scalars['Float'];
  eta?: Maybe<Scalars['Float']>;
  hash: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  progress: Scalars['Float'];
  ratio: Scalars['Float'];
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  transmissionId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  uploaded: Scalars['Float'];
};

export type TorrentMaxAggregate = {
  __typename?: 'TorrentMaxAggregate';
  addedAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  hash?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  torrentId?: Maybe<Scalars['String']>;
  transmissionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentMaxOrderByAggregateInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentMinAggregate = {
  __typename?: 'TorrentMinAggregate';
  addedAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  hash?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  torrentId?: Maybe<Scalars['String']>;
  transmissionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentMinOrderByAggregateInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentOrderByWithAggregationInput = {
  _avg?: InputMaybe<TorrentAvgOrderByAggregateInput>;
  _count?: InputMaybe<TorrentCountOrderByAggregateInput>;
  _max?: InputMaybe<TorrentMaxOrderByAggregateInput>;
  _min?: InputMaybe<TorrentMinOrderByAggregateInput>;
  _sum?: InputMaybe<TorrentSumOrderByAggregateInput>;
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentOrderByWithRelationInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  files?: InputMaybe<TorrentFileOrderByRelationAggregateInput>;
  hash?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentRelationFilter = {
  is?: InputMaybe<TorrentWhereInput>;
  isNot?: InputMaybe<TorrentWhereInput>;
};

export enum TorrentScalarFieldEnum {
  AddedAt = 'addedAt',
  CompletedAt = 'completedAt',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Downloaded = 'downloaded',
  Eta = 'eta',
  Hash = 'hash',
  IsDeleted = 'isDeleted',
  Name = 'name',
  Path = 'path',
  Progress = 'progress',
  Ratio = 'ratio',
  Size = 'size',
  Status = 'status',
  TorrentId = 'torrentId',
  TransmissionId = 'transmissionId',
  UpdatedAt = 'updatedAt',
  Uploaded = 'uploaded'
}

export type TorrentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TorrentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TorrentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TorrentScalarWhereWithAggregatesInput>>;
  addedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  completedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  downloaded?: InputMaybe<FloatWithAggregatesFilter>;
  eta?: InputMaybe<FloatNullableWithAggregatesFilter>;
  hash?: InputMaybe<StringWithAggregatesFilter>;
  isDeleted?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  progress?: InputMaybe<FloatWithAggregatesFilter>;
  ratio?: InputMaybe<FloatWithAggregatesFilter>;
  size?: InputMaybe<FloatWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  torrentId?: InputMaybe<StringWithAggregatesFilter>;
  transmissionId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  uploaded?: InputMaybe<FloatWithAggregatesFilter>;
};

export type TorrentSumAggregate = {
  __typename?: 'TorrentSumAggregate';
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  transmissionId?: Maybe<Scalars['Int']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentSumOrderByAggregateInput = {
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  transmissionId?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentUpdateInput = {
  addedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  eta?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  files?: InputMaybe<TorrentFileUpdateManyWithoutTorrentInput>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<FloatFieldUpdateOperationsInput>;
  ratio?: InputMaybe<FloatFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  torrentId?: InputMaybe<StringFieldUpdateOperationsInput>;
  transmissionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uploaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type TorrentUpdateManyMutationInput = {
  addedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  eta?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<FloatFieldUpdateOperationsInput>;
  ratio?: InputMaybe<FloatFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  torrentId?: InputMaybe<StringFieldUpdateOperationsInput>;
  transmissionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uploaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type TorrentWhereInput = {
  AND?: InputMaybe<Array<TorrentWhereInput>>;
  NOT?: InputMaybe<Array<TorrentWhereInput>>;
  OR?: InputMaybe<Array<TorrentWhereInput>>;
  addedAt?: InputMaybe<DateTimeFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  downloaded?: InputMaybe<FloatFilter>;
  eta?: InputMaybe<FloatNullableFilter>;
  files?: InputMaybe<TorrentFileListRelationFilter>;
  hash?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  progress?: InputMaybe<FloatFilter>;
  ratio?: InputMaybe<FloatFilter>;
  size?: InputMaybe<FloatFilter>;
  status?: InputMaybe<StringFilter>;
  torrentId?: InputMaybe<StringFilter>;
  transmissionId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uploaded?: InputMaybe<FloatFilter>;
};

export type TorrentWhereUniqueInput = {
  hash?: InputMaybe<Scalars['String']>;
  torrentId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  disabledAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  disabledAt: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  isDeleted: Scalars['Int'];
  isDisabled: Scalars['Int'];
  lastName: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  disabledAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  disabledAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  disabledAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  disabledAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  disabledAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DisabledAt = 'disabledAt',
  Email = 'email',
  FirstName = 'firstName',
  IsDeleted = 'isDeleted',
  IsDisabled = 'isDisabled',
  LastName = 'lastName',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  disabledAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  isDeleted?: InputMaybe<BoolWithAggregatesFilter>;
  isDisabled?: InputMaybe<BoolWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  disabledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  disabledAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  disabledAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
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


export type TorrentsQuery = { __typename?: 'Query', torrents: Array<{ __typename?: 'Torrent', torrentId: string, hash: string, name: string, size: number, eta?: number | null | undefined, downloaded: number, uploaded: number, ratio: number, addedAt: any, createdAt: any, updatedAt: any }> };

export type TorrentsUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TorrentsUpdatesSubscription = { __typename?: 'Subscription', torrentsUpdate: Array<{ __typename?: 'Torrent', torrentId: string, downloaded: number, ratio: number, eta?: number | null | undefined }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', userId: string, email: string, firstName: string, lastName: string, isDisabled: boolean, createdAt: any, updatedAt: any }> };


export const TorrentsDocument = gql`
    query Torrents {
  torrents(orderBy: {addedAt: desc}) {
    torrentId
    hash
    name
    size
    eta
    downloaded
    uploaded
    ratio
    addedAt
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
export const TorrentsUpdatesDocument = gql`
    subscription TorrentsUpdates {
  torrentsUpdate {
    torrentId
    downloaded
    ratio
    eta
  }
}
    `;

/**
 * __useTorrentsUpdatesSubscription__
 *
 * To run a query within a React component, call `useTorrentsUpdatesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTorrentsUpdatesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTorrentsUpdatesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTorrentsUpdatesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TorrentsUpdatesSubscription, TorrentsUpdatesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TorrentsUpdatesSubscription, TorrentsUpdatesSubscriptionVariables>(TorrentsUpdatesDocument, options);
      }
export type TorrentsUpdatesSubscriptionHookResult = ReturnType<typeof useTorrentsUpdatesSubscription>;
export type TorrentsUpdatesSubscriptionResult = Apollo.SubscriptionResult<TorrentsUpdatesSubscription>;
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