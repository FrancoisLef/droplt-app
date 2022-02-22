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
  Column,
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
import { useQueryParamsState } from './hooks';
import locales from './locales';

type ColumnType = Array<
  Column<{
    name: string;
    size: number;
    progress: number;
    addedAt: string;
  }>
>;

interface TorrentTableComponentProps extends TableProps {
  data: TorrentsQuery;
}

const TorrentTable: React.FC<TorrentTableComponentProps> = ({
  data,
  ...props
}) => {
  const { initialPageSize, initialPageIndex, setPage, setSize } =
    useQueryParamsState({
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
        Header: locales.columns.name,
        accessor: 'name',
        Cell: ({ value }) => <Text fontWeight="medium">{value}</Text>,
      },
      {
        Header: locales.columns.addedAt,
        accessor: 'addedAt',
        sortInverted: true,
        isNumeric: true,
        width: '30',
        Cell: ({ value }) => (
          <Text type="secondary" fontWeight="light">
            {formatDistanceToNowStrict(new Date(value)).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        Header: locales.columns.size,
        accessor: 'size',
        isNumeric: true,
        width: '30',
        Cell: ({ value }) => (
          <Text type="secondary" fontWeight="light">
            {prettyBytes(value).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        Header: locales.columns.progress,
        accessor: 'progress',
        isCentered: true,
        width: '5',
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
      columns,
      data: torrents,
      autoResetSortBy: false,
      autoResetPage: false,
      initialState: { pageSize: initialPageSize, pageIndex: initialPageIndex },
      disableMultiSort: true,
    },
    useFlexLayout,
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

  return (
    <>
      <Table size="md" {...getTableProps()} {...props}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  textAlign={column.isCentered ? 'center' : 'unset'}
                  isNumeric={column.isNumeric}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <chakra.span pl="2">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon
                          as={FaChevronDown}
                          aria-label={locales.sortedDescending}
                        />
                      ) : (
                        <Icon
                          as={FaChevronUp}
                          aria-label={locales.sortedAscending}
                        />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
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
