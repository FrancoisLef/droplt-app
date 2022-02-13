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

export type AggregateTorrentFile = {
  __typename?: 'AggregateTorrentFile';
  _avg?: Maybe<TorrentFileAvgAggregate>;
  _count?: Maybe<TorrentFileCountAggregate>;
  _max?: Maybe<TorrentFileMaxAggregate>;
  _min?: Maybe<TorrentFileMinAggregate>;
  _sum?: Maybe<TorrentFileSumAggregate>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createManyTorrent: AffectedRowsOutput;
  createManyTorrentFile: AffectedRowsOutput;
  createTorrent: Torrent;
  createTorrentFile: TorrentFile;
  deleteManyTorrent: AffectedRowsOutput;
  deleteManyTorrentFile: AffectedRowsOutput;
  deleteTorrent?: Maybe<Torrent>;
  deleteTorrentFile?: Maybe<TorrentFile>;
  updateManyTorrent: AffectedRowsOutput;
  updateManyTorrentFile: AffectedRowsOutput;
  updateTorrent?: Maybe<Torrent>;
  updateTorrentFile?: Maybe<TorrentFile>;
  upsertTorrent: Torrent;
  upsertTorrentFile: TorrentFile;
};


export type MutationCreateManyTorrentArgs = {
  data: Array<TorrentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTorrentFileArgs = {
  data: Array<TorrentFileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTorrentArgs = {
  data: TorrentCreateInput;
};


export type MutationCreateTorrentFileArgs = {
  data: TorrentFileCreateInput;
};


export type MutationDeleteManyTorrentArgs = {
  where?: InputMaybe<TorrentWhereInput>;
};


export type MutationDeleteManyTorrentFileArgs = {
  where?: InputMaybe<TorrentFileWhereInput>;
};


export type MutationDeleteTorrentArgs = {
  where: TorrentWhereUniqueInput;
};


export type MutationDeleteTorrentFileArgs = {
  where: TorrentFileWhereUniqueInput;
};


export type MutationUpdateManyTorrentArgs = {
  data: TorrentUpdateManyMutationInput;
  where?: InputMaybe<TorrentWhereInput>;
};


export type MutationUpdateManyTorrentFileArgs = {
  data: TorrentFileUpdateManyMutationInput;
  where?: InputMaybe<TorrentFileWhereInput>;
};


export type MutationUpdateTorrentArgs = {
  data: TorrentUpdateInput;
  where: TorrentWhereUniqueInput;
};


export type MutationUpdateTorrentFileArgs = {
  data: TorrentFileUpdateInput;
  where: TorrentFileWhereUniqueInput;
};


export type MutationUpsertTorrentArgs = {
  create: TorrentCreateInput;
  update: TorrentUpdateInput;
  where: TorrentWhereUniqueInput;
};


export type MutationUpsertTorrentFileArgs = {
  create: TorrentFileCreateInput;
  update: TorrentFileUpdateInput;
  where: TorrentFileWhereUniqueInput;
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

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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
  aggregateTorrentFile: AggregateTorrentFile;
  findFirstTorrent?: Maybe<Torrent>;
  findFirstTorrentFile?: Maybe<TorrentFile>;
  groupByTorrent: Array<TorrentGroupBy>;
  groupByTorrentFile: Array<TorrentFileGroupBy>;
  torrent?: Maybe<Torrent>;
  torrentFile?: Maybe<TorrentFile>;
  torrentFiles: Array<TorrentFile>;
  torrents: Array<Torrent>;
};


export type QueryAggregateTorrentArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryAggregateTorrentFileArgs = {
  cursor?: InputMaybe<TorrentFileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TorrentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentFileWhereInput>;
};


export type QueryFindFirstTorrentArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryFindFirstTorrentFileArgs = {
  cursor?: InputMaybe<TorrentFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentFileWhereInput>;
};


export type QueryGroupByTorrentArgs = {
  by: Array<TorrentScalarFieldEnum>;
  having?: InputMaybe<TorrentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
};


export type QueryGroupByTorrentFileArgs = {
  by: Array<TorrentFileScalarFieldEnum>;
  having?: InputMaybe<TorrentFileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TorrentFileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentFileWhereInput>;
};


export type QueryTorrentArgs = {
  where: TorrentWhereUniqueInput;
};


export type QueryTorrentFileArgs = {
  where: TorrentFileWhereUniqueInput;
};


export type QueryTorrentFilesArgs = {
  cursor?: InputMaybe<TorrentFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentFileWhereInput>;
};


export type QueryTorrentsArgs = {
  cursor?: InputMaybe<TorrentWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentWhereInput>;
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

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export type Torrent = {
  __typename?: 'Torrent';
  _count?: Maybe<TorrentCount>;
  addedAt: Scalars['DateTime'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  downloaded: Scalars['Float'];
  eta?: Maybe<Scalars['Float']>;
  files: Array<TorrentFile>;
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


export type TorrentFilesArgs = {
  cursor?: InputMaybe<TorrentFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<TorrentFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TorrentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TorrentFileWhereInput>;
};

export type TorrentAvgAggregate = {
  __typename?: 'TorrentAvgAggregate';
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentAvgOrderByAggregateInput = {
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
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
  downloaded: Scalars['Int'];
  eta: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  progress: Scalars['Int'];
  ratio: Scalars['Int'];
  size: Scalars['Int'];
  status: Scalars['Int'];
  torrentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  uploaded: Scalars['Int'];
};

export type TorrentCountOrderByAggregateInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentCreateInput = {
  addedAt: Scalars['DateTime'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  eta?: InputMaybe<Scalars['Float']>;
  files?: InputMaybe<TorrentFileCreateNestedManyWithoutTorrentInput>;
  name: Scalars['String'];
  path: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  ratio?: InputMaybe<Scalars['Float']>;
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uploaded?: InputMaybe<Scalars['Float']>;
};

export type TorrentCreateManyInput = {
  addedAt: Scalars['DateTime'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  eta?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  path: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  ratio?: InputMaybe<Scalars['Float']>;
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uploaded?: InputMaybe<Scalars['Float']>;
};

export type TorrentCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<TorrentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TorrentCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TorrentCreateWithoutFilesInput>;
};

export type TorrentCreateOrConnectWithoutFilesInput = {
  create: TorrentCreateWithoutFilesInput;
  where: TorrentWhereUniqueInput;
};

export type TorrentCreateWithoutFilesInput = {
  addedAt: Scalars['DateTime'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  eta?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  path: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  ratio?: InputMaybe<Scalars['Float']>;
  size: Scalars['Float'];
  status: Scalars['String'];
  torrentId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uploaded?: InputMaybe<Scalars['Float']>;
};

export type TorrentFile = {
  __typename?: 'TorrentFile';
  Torrent?: Maybe<Torrent>;
  createdAt: Scalars['DateTime'];
  downloaded: Scalars['Float'];
  name: Scalars['String'];
  size: Scalars['Float'];
  torrentFileId: Scalars['String'];
  torrentId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TorrentFileAvgAggregate = {
  __typename?: 'TorrentFileAvgAggregate';
  downloaded?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type TorrentFileAvgOrderByAggregateInput = {
  downloaded?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
};

export type TorrentFileCountAggregate = {
  __typename?: 'TorrentFileCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  downloaded: Scalars['Int'];
  name: Scalars['Int'];
  size: Scalars['Int'];
  torrentFileId: Scalars['Int'];
  torrentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TorrentFileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  torrentFileId?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TorrentFileCreateInput = {
  Torrent?: InputMaybe<TorrentCreateNestedOneWithoutFilesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  size: Scalars['Float'];
  torrentFileId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TorrentFileCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloaded?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  size: Scalars['Float'];
  torrentFileId?: InputMaybe<Scalars['String']>;
  torrentId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type TorrentFileGroupBy = {
  __typename?: 'TorrentFileGroupBy';
  _avg?: Maybe<TorrentFileAvgAggregate>;
  _count?: Maybe<TorrentFileCountAggregate>;
  _max?: Maybe<TorrentFileMaxAggregate>;
  _min?: Maybe<TorrentFileMinAggregate>;
  _sum?: Maybe<TorrentFileSumAggregate>;
  createdAt: Scalars['DateTime'];
  downloaded: Scalars['Float'];
  name: Scalars['String'];
  size: Scalars['Float'];
  torrentFileId: Scalars['String'];
  torrentId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TorrentFileListRelationFilter = {
  every?: InputMaybe<TorrentFileWhereInput>;
  none?: InputMaybe<TorrentFileWhereInput>;
  some?: InputMaybe<TorrentFileWhereInput>;
};

export type TorrentFileMaxAggregate = {
  __typename?: 'TorrentFileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  downloaded?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  torrentFileId?: Maybe<Scalars['String']>;
  torrentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TorrentFileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  torrentFileId?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TorrentFileMinAggregate = {
  __typename?: 'TorrentFileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  downloaded?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  torrentFileId?: Maybe<Scalars['String']>;
  torrentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TorrentFileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  torrentFileId?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TorrentFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TorrentFileOrderByWithAggregationInput = {
  _avg?: InputMaybe<TorrentFileAvgOrderByAggregateInput>;
  _count?: InputMaybe<TorrentFileCountOrderByAggregateInput>;
  _max?: InputMaybe<TorrentFileMaxOrderByAggregateInput>;
  _min?: InputMaybe<TorrentFileMinOrderByAggregateInput>;
  _sum?: InputMaybe<TorrentFileSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  torrentFileId?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TorrentFileOrderByWithRelationInput = {
  Torrent?: InputMaybe<TorrentOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  torrentFileId?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TorrentFileScalarFieldEnum {
  CreatedAt = 'createdAt',
  Downloaded = 'downloaded',
  Name = 'name',
  Size = 'size',
  TorrentFileId = 'torrentFileId',
  TorrentId = 'torrentId',
  UpdatedAt = 'updatedAt'
}

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

export type TorrentFileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TorrentFileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TorrentFileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TorrentFileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  downloaded?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  size?: InputMaybe<FloatWithAggregatesFilter>;
  torrentFileId?: InputMaybe<StringWithAggregatesFilter>;
  torrentId?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TorrentFileSumAggregate = {
  __typename?: 'TorrentFileSumAggregate';
  downloaded?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type TorrentFileSumOrderByAggregateInput = {
  downloaded?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
};

export type TorrentFileUpdateInput = {
  Torrent?: InputMaybe<TorrentUpdateOneWithoutFilesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  torrentFileId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type TorrentMaxAggregate = {
  __typename?: 'TorrentMaxAggregate';
  addedAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  torrentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentMaxOrderByAggregateInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentMinAggregate = {
  __typename?: 'TorrentMinAggregate';
  addedAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloaded?: Maybe<Scalars['Float']>;
  eta?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Float']>;
  ratio?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  torrentId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentMinOrderByAggregateInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
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
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentOrderByWithRelationInput = {
  addedAt?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  files?: InputMaybe<TorrentFileOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  torrentId?: InputMaybe<SortOrder>;
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
  Downloaded = 'downloaded',
  Eta = 'eta',
  Name = 'name',
  Path = 'path',
  Progress = 'progress',
  Ratio = 'ratio',
  Size = 'size',
  Status = 'status',
  TorrentId = 'torrentId',
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
  downloaded?: InputMaybe<FloatWithAggregatesFilter>;
  eta?: InputMaybe<FloatNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  progress?: InputMaybe<FloatWithAggregatesFilter>;
  ratio?: InputMaybe<FloatWithAggregatesFilter>;
  size?: InputMaybe<FloatWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  torrentId?: InputMaybe<StringWithAggregatesFilter>;
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
  uploaded?: Maybe<Scalars['Float']>;
};

export type TorrentSumOrderByAggregateInput = {
  downloaded?: InputMaybe<SortOrder>;
  eta?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  ratio?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type TorrentUpdateInput = {
  addedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  eta?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  files?: InputMaybe<TorrentFileUpdateManyWithoutTorrentInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<FloatFieldUpdateOperationsInput>;
  ratio?: InputMaybe<FloatFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  torrentId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uploaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type TorrentUpdateManyMutationInput = {
  addedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  eta?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<FloatFieldUpdateOperationsInput>;
  ratio?: InputMaybe<FloatFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  torrentId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uploaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type TorrentUpdateOneWithoutFilesInput = {
  connect?: InputMaybe<TorrentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TorrentCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TorrentCreateWithoutFilesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TorrentUpdateWithoutFilesInput>;
  upsert?: InputMaybe<TorrentUpsertWithoutFilesInput>;
};

export type TorrentUpdateWithoutFilesInput = {
  addedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  downloaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
  eta?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<FloatFieldUpdateOperationsInput>;
  ratio?: InputMaybe<FloatFieldUpdateOperationsInput>;
  size?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  torrentId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uploaded?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type TorrentUpsertWithoutFilesInput = {
  create: TorrentCreateWithoutFilesInput;
  update: TorrentUpdateWithoutFilesInput;
};

export type TorrentWhereInput = {
  AND?: InputMaybe<Array<TorrentWhereInput>>;
  NOT?: InputMaybe<Array<TorrentWhereInput>>;
  OR?: InputMaybe<Array<TorrentWhereInput>>;
  addedAt?: InputMaybe<DateTimeFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  downloaded?: InputMaybe<FloatFilter>;
  eta?: InputMaybe<FloatNullableFilter>;
  files?: InputMaybe<TorrentFileListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  progress?: InputMaybe<FloatFilter>;
  ratio?: InputMaybe<FloatFilter>;
  size?: InputMaybe<FloatFilter>;
  status?: InputMaybe<StringFilter>;
  torrentId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uploaded?: InputMaybe<FloatFilter>;
};

export type TorrentWhereUniqueInput = {
  torrentId?: InputMaybe<Scalars['String']>;
};

export type TorrentsQueryVariables = Exact<{ [key: string]: never; }>;


export type TorrentsQuery = { __typename?: 'Query', torrents: Array<{ __typename?: 'Torrent', torrentId: string, name: string, size: number, progress: number, addedAt: any }> };


export const TorrentsDocument = gql`
    query Torrents {
  torrents(orderBy: {addedAt: desc}) {
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