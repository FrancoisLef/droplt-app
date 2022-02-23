import { Column } from 'react-table';

export type TorrentColumn = {
  name: string;
  size: number;
  progress: number;
  addedAt: string;
};

export type ColumnType = Array<Column<TorrentColumn>>;
