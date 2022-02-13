import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';
import { useMemo } from 'react';
import { Column, usePagination, useSortBy, useTable } from 'react-table';

import CircularProgress from '../../components/CircularProgress';
import { formatDistanceToNowStrict } from '../../helpers/date';
import { useTorrents } from './hooks';
import locales from './locales';

type ColumnType = Array<
  Column<{
    name: string;
    size: number;
    progress: number;
    addedAt: string;
  }>
>;

const HomePage: React.FC = () => {
  const { torrents } = useTorrents();

  const columns: ColumnType = useMemo(
    () => [
      {
        Header: locales.columns.addedAt,
        accessor: 'addedAt',
        Cell: ({ value }) => (
          <Text fontWeight="light" color="gray.500">
            {formatDistanceToNowStrict(new Date(value)).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        Header: locales.columns.name,
        accessor: 'name',
        Cell: ({ value }) => (
          <Text fontWeight="medium" color={mode('gray.800', 'gray.100')}>
            {value}
          </Text>
        ),
      },
      {
        Header: locales.columns.size,
        accessor: 'size',
        isNumeric: true,
        Cell: ({ value }) => (
          <Text fontWeight="light" color="gray.500">
            {prettyBytes(value).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        Header: locales.columns.progress,
        accessor: 'progress',
        isCentered: true,
        Cell: ({ value }) => (
          <CircularProgress value={value} thickness="6px" size="40px" />
        ),
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      torrents.map((torrent) => ({
        name: torrent.name,
        size: torrent.size,
        progress: torrent.progress,
        addedAt: torrent.addedAt,
      })),
    [torrents]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        autoResetSortBy: false,
        initialState: { pageSize: 5, pageIndex: 0 },
      },
      useSortBy
      // usePagination
    );

  return (
    <Box width="full">
      <Table size="md" {...getTableProps()}>
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
                        <TriangleDownIcon
                          aria-label={locales.sortedDescending}
                        />
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
          {rows.map((row) => {
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
    </Box>
  );
};

export default HomePage;
