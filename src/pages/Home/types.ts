import { Column, SortingRule } from 'react-table';

export type TorrentRow = {
  name: string;
  size: number;
  progress: number;
  addedAt: string;
};
export type TorrentColumns = Array<Column<TorrentRow>>;
export type TorrentSorting = SortingRule<TorrentRow>[];
