import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
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
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import { Column, usePagination, useSortBy, useTable } from 'react-table';

import CircularProgress from '../../../../components/CircularProgress';
import Pagination from '../../../../components/Pagination';
import Text from '../../../../components/Text';
import { TorrentsQuery } from '../../../../graphql';
import { formatDistanceToNowStrict } from '../../../../helpers/date';
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

const PAGE_SIZES = [10, 20, 30, 40, 50];

const TorrentTable: React.FC<TorrentTableComponentProps> = ({
  data,
  ...props
}) => {
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
        Cell: ({ value }) => {
          if (Math.round(value) === 1) {
            return <Icon as={ImCheckmark} w={3} h={3} color="brand.300" />;
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
      initialState: { pageSize: PAGE_SIZES[0], pageIndex: 0 },
      disableMultiSort: true,
    },
    useSortBy,
    usePagination
  );

  return (
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
                      <TriangleDownIcon aria-label={locales.sortedDescending} />
                    ) : (
                      <TriangleUpIcon aria-label={locales.sortedAscending} />
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
      <Flex mt={6} alignItems="center">
        <Pagination.Control
          label={locales.pagination.firstPage}
          isDisabled={!canPreviousPage}
          icon={<FaArrowLeft />}
          onClick={() => gotoPage(0)}
        />
        <Pagination.Control
          label={locales.pagination.previousPage}
          isDisabled={!canPreviousPage}
          icon={<FaChevronLeft />}
          onClick={previousPage}
        />
        <Pagination.Count pageIndex={pageIndex} pageCount={pageCount} m="2" />
        <Pagination.PageSize
          width={36}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
        <Pagination.Control
          label={locales.pagination.nextPage}
          isDisabled={!canNextPage}
          icon={<FaChevronRight />}
          onClick={nextPage}
        />
        <Pagination.Control
          label={locales.pagination.lastPage}
          isDisabled={!canNextPage}
          icon={<FaArrowRight />}
          onClick={() => gotoPage(pageCount - 1)}
        />
      </Flex>
    </Table>
  );
};

export default TorrentTable;
