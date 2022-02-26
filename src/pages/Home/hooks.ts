import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_DESC,
  SORT_DIRECTION,
} from './constants';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(new URLSearchParams(searchParams));

  // Because index starts at 0 but we are displaying pages from 1 to x
  // Substract 1 to the actual index to reflect the correct page to the user
  const pageIndex = Number(params.page) - 1 || 0;
  const pageSize = Number(params.size) || DEFAULT_PAGE_SIZE;
  const sortBy = [
    {
      id: params.sortBy || DEFAULT_SORT_BY,
      desc: params.sortDirection === SORT_DIRECTION.DESC || DEFAULT_SORT_DESC,
    },
  ];
  const [filter, setFilterState] = useState(params.filter || '');

  // Same thing about the index starting at 0 but pages starting at 1
  const setPage = (index: number) =>
    setSearchParams({ ...params, page: (index + 1).toString() });

  const setSize = (size: number) =>
    setSearchParams({ ...params, size: size.toString() });

  const setSort = (id: string, desc: boolean | undefined) => {
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

  const setFilter = (value: string) => {
    const { filter: _, ...paramsWithoutFilter } = params;
    setFilterState(value);
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
    pageIndex,
    pageSize,
    sortBy,
    filter,
    setPage,
    setSize,
    setSort,
    setFilter,
  };
};

export const useTorrentTable = () => {};
