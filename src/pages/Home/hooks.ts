import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTorrentsQuery } from '../../graphql';
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_DESC,
  SORT_DIRECTION,
} from './constants';
import { TorrentRow, TorrentSorting } from './types';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(new URLSearchParams(searchParams));
  const [filter, setFilterValue] = useState(params.filter || '');

  /**
   * Page index
   */
  // Because index starts at 0 but we are displaying pages from 1 to x
  // Substract 1 to the actual index to reflect the correct page to the user
  const pageIndex = Number(params.page) - 1 || 0;

  // Same thing about the index starting at 0 but pages starting at 1
  const setPageIndex = (index: number) =>
    setSearchParams({ ...params, page: (index + 1).toString() });

  /**
   * Page size
   */
  const pageSize = Number(params.size) || DEFAULT_PAGE_SIZE;

  const setPageSize = (size: number) =>
    setSearchParams({ ...params, size: size.toString() });

  /**
   * Sort by
   */
  const sortBy: TorrentSorting = [
    {
      id: params.sortBy || DEFAULT_SORT_BY,
      desc: params.sortDirection === SORT_DIRECTION.DESC || DEFAULT_SORT_DESC,
    },
  ];

  const setSortBy = (id: string, desc: boolean | undefined) => {
    // As we are receiving the "desc" props before the render occurs
    // It's value is the old value before it will be updated
    // So we need to inverse the logic here
    const direction = [undefined, true].includes(desc)
      ? SORT_DIRECTION.ASC
      : SORT_DIRECTION.DESC;
    setSearchParams({
      ...params,
      sortBy: id,
      sortDirection: direction,
    });
  };

  /**
   * Filters
   */
  const setFilter = (value: string) => {
    const { filter: _, ...paramsWithoutFilter } = params;
    setFilterValue(value);

    setSearchParams({
      ...paramsWithoutFilter,
      ...(value !== ''
        ? {
            filter: value,
          }
        : {}),
    });
  };

  return {
    initialState: {
      pageIndex,
      pageSize,
      sortBy,
    },
    filter,
    setPageIndex,
    setPageSize,
    setSortBy,
    setFilter,
  };
};

export const useTorrentsTable = () => {
  const { data: queryData } = useTorrentsQuery();
  const props = useQueryParams();
  const { filter } = props;

  const torrents: TorrentRow[] = useMemo(
    () =>
      (queryData?.torrents || []).map((torrent) => ({
        name: torrent.name,
        size: torrent.size,
        progress: torrent.progress,
        addedAt: torrent.addedAt,
      })),
    [queryData]
  );

  const fuzzy = new Fuse(torrents, {
    keys: ['name'],
    threshold: 0.4,
  });

  const searchResults = fuzzy.search(filter).map(({ item }) => item);

  return {
    data: filter ? searchResults : torrents,
    ...props,
  };
};
