import { Column } from 'react-table';

export type Torrent = {
  name: string;
  size: number;
  progress: number;
  addedAt: string;
};

export type ColumnType = Array<Column<Torrent>>;
