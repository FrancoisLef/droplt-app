import {
  chakra,
  Flex,
  Icon,
  Table,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';
import { useMemo } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
} from 'react-icons/fa';
import {
  useFilters,
  useFlexLayout,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import CircularProgress from '../../../../components/CircularProgress';
import Pagination, {
  DEFAULT_PAGE_SIZE,
} from '../../../../components/Pagination';
import Text from '../../../../components/Text';
import { TorrentsQuery } from '../../../../graphql';
import { formatDistanceToNowStrict } from '../../../../helpers/date';
import NameFilter from './components/NameFilter';
import { useQueryParamsState } from './hooks';
import locales from './locales';
import { ColumnType } from './types';

interface TorrentTableComponentProps extends TableProps {
  data: TorrentsQuery;
}

const TorrentTable: React.FC<TorrentTableComponentProps> = ({
  data,
  ...props
}) => {
  const {
    pageSize: hookPageSize,
    pageIndex: hookPageIndex,
    sortBy: hookSort,
    search,
    setPage,
    setSize,
    setSearch,
    setSort,
  } = useQueryParamsState({
    defaultPageSize: DEFAULT_PAGE_SIZE,
  });

  const torrents = useMemo(
    () =>
      data.torrents.map((torrent) => ({
        name: torrent.name,
        size: torrent.size,
        progress: torrent.progress,
        addedAt: torrent.addedAt,
      })),
    [data]
  );

  const columns: ColumnType = useMemo(
    () => [
      {
        accessor: 'name',
        Header: locales.columns.name,
        Cell: ({ value }) => <Text fontWeight="medium">{value}</Text>,
      },
      {
        accessor: 'addedAt',
        Header: locales.columns.addedAt,
        disableGlobalFilter: true,
        sortInverted: true,
        isNumeric: true,
        width: '50',
        Cell: ({ value }) => (
          <Text type="secondary" fontWeight="light">
            {formatDistanceToNowStrict(new Date(value)).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        accessor: 'size',
        Header: locales.columns.size,
        disableGlobalFilter: true,
        isNumeric: true,
        width: '50',
        Cell: ({ value }) => (
          <Text type="secondary" fontWeight="light">
            {prettyBytes(value).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        accessor: 'progress',
        Header: locales.columns.progress,
        disableGlobalFilter: true,
        isCentered: true,
        width: '30',
        Cell: ({ value }) => {
          if (Math.round(value) === 1) {
            return <Icon as={FaCheck} w={3} h={3} color="brand.500" />;
          }
          return <CircularProgress value={value} thickness="6px" size="40px" />;
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    // Filter
    setFilter,
    filteredRows,

    // Pagination
    setPageSize,
    pageCount,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    gotoPage,

    // Table state
    state: { pageIndex, pageSize },
  } = useTable(
    {
      autoResetSortBy: false,
      autoResetPage: false,
      autoResetGlobalFilter: false,
      columns,
      data: torrents,
      disableSortRemove: true, // ease the process of sorting by allowing only 2 values: true || false
      disableMultiSort: true,
      initialState: {
        pageSize: hookPageSize,
        pageIndex: hookPageIndex,
        sortBy: hookSort,
        filters: [{ id: 'name', value: search }],
      },
    },
    useFlexLayout,
    useFilters,
    useSortBy,
    usePagination
  );

  const onFirst = () => {
    gotoPage(0);
    setPage(0);
  };

  const onPrevious = () => {
    previousPage();
    setPage(pageIndex - 1);
  };

  const onNext = () => {
    nextPage();
    setPage(pageIndex + 1);
  };

  const onLast = () => {
    gotoPage(pageCount - 1);
    setPage(pageCount - 1);
  };

  const onPageSize = (size: number) => {
    setPageSize(size);
    setSize(size);
  };

  const onSearch = (value: string) => {
    setSearch(value);
    setFilter('name', value);
  };

  return (
    <>
      <NameFilter
        count={filteredRows.length}
        value={search}
        onChange={onSearch}
      />
      <Table size="md" {...getTableProps()} {...props}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                const {
                  isSorted,
                  isCentered,
                  isNumeric,
                  id,
                  isSortedDesc,
                  getSortByToggleProps,
                } = column;
                const { onClick: defaultSortByOnClick } =
                  getSortByToggleProps();

                return (
                  <Th
                    textAlign={isCentered ? 'center' : 'unset'}
                    isNumeric={isNumeric}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    onClick={(e) => {
                      if (defaultSortByOnClick) {
                        defaultSortByOnClick(e);
                      }
                      setSort(id, isSortedDesc);
                    }}
                  >
                    {column.render('Header')}
                    <chakra.span pl="2">
                      {isSorted ? (
                        <Icon
                          verticalAlign="middle"
                          as={isSortedDesc ? FaChevronDown : FaChevronUp}
                          aria-label={
                            isSortedDesc
                              ? locales.sortedDescending
                              : locales.sortedAscending
                          }
                        />
                      ) : null}
                    </chakra.span>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    textAlign={cell.column.isCentered ? 'center' : 'unset'}
                    isNumeric={cell.column.isNumeric}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex width="full" mt={6} justifyContent="center" alignItems="center">
        <Pagination.Control
          colorScheme="brand"
          variant="outline"
          size="sm"
          label={locales.pagination.firstPage}
          isDisabled={!canPreviousPage}
          icon={<FaArrowLeft />}
          onClick={onFirst}
          mr="4"
        />
        <Pagination.Control
          colorScheme="brand"
          variant="outline"
          size="sm"
          label={locales.pagination.previousPage}
          isDisabled={!canPreviousPage}
          icon={<FaChevronLeft />}
          onClick={onPrevious}
          mr="4"
        />
        <Pagination.Count pageIndex={pageIndex} pageCount={pageCount} mr="4" />
        <Pagination.PageSize
          width={36}
          pageSize={pageSize}
          setPageSize={onPageSize}
          mr="4"
        />
        <Pagination.Control
          colorScheme="brand"
          variant="outline"
          size="sm"
          label={locales.pagination.nextPage}
          isDisabled={!canNextPage}
          icon={<FaChevronRight />}
          onClick={onNext}
          mr="4"
        />
        <Pagination.Control
          colorScheme="brand"
          variant="outline"
          size="sm"
          label={locales.pagination.lastPage}
          isDisabled={!canNextPage}
          icon={<FaArrowRight />}
          onClick={onLast}
          mr="4"
        />
      </Flex>
    </>
  );
};

export default TorrentTable;
