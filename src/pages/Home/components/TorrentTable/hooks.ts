import { useSearchParams } from 'react-router-dom';

export const useQueryParamsState = ({
  defaultPageSize,
}: {
  defaultPageSize: number;
}) => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  // Because index starts at 0 but we are displaying pages from 1 to x
  // Substract 1 to the actual index to reflect the correct page to the user
  const initialPageIndex = Number(searchAsObject.page) - 1 || 0;
  const initialPageSize = Number(searchAsObject.size) || defaultPageSize;
  const initialSort = [
    {
      id: searchAsObject.sortBy || 'addedAt',
      desc: searchAsObject.sortDirection === 'DESC' || false,
    },
  ];

  // Same thing about the index starting at 0 but pages starting at 1
  const setPage = (index: number) =>
    setSearch({ ...searchAsObject, page: (index + 1).toString() });

  const setSize = (size: number) =>
    setSearch({ ...searchAsObject, size: size.toString() });

  const setSort = (id: string, desc: boolean | undefined) => {
    // As we are receiving the "desc" props before the render occurs
    // It's value is the old value before it will be updated
    // So we need to inverse the logic here
    const direction = [undefined, true].includes(desc) ? 'ASC' : 'DESC';
    setSearch({
      ...searchAsObject,
      sortBy: id,
      sortDirection: direction,
    });
  };

  return {
    initialPageIndex,
    initialPageSize,
    initialSort,
    setPage,
    setSize,
    setSort,
  };
};
