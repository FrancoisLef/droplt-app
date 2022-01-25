import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';
import { useMemo } from 'react';
import { Column, usePagination, useSortBy, useTable } from 'react-table';

import { formatDate, Patp } from '../../helpers/date';
import { useTorrents } from './hooks';
import locales from './locales';

type ColumnType = Array<
  Column<{
    name: string;
    eta?: number | null;
    ratio: number;
    downloaded: number;
    size: number;
    uploaded: number;
    addedAt: string;
  }>
>;

const HomePage: React.FC = () => {
  const { torrents } = useTorrents();

  const columns: ColumnType = useMemo(
    () => [
      {
        Header: locales.columns.name,
        accessor: 'name',
      },
      {
        Header: locales.columns.eta,
        accessor: 'eta',
      },
      {
        Header: locales.columns.ratio,
        accessor: 'ratio',
      },
      {
        Header: locales.columns.size,
        accessor: 'size',
        Cell: ({ value }) => prettyBytes(value),
      },
      {
        Header: locales.columns.downloaded,
        accessor: 'downloaded',
        Cell: ({ value }) => prettyBytes(value),
      },
      {
        Header: locales.columns.uploaded,
        accessor: 'uploaded',
        Cell: ({ value }) => prettyBytes(value),
      },
      {
        Header: locales.columns.addedAt,
        accessor: 'addedAt',
        Cell: ({ value }) => formatDate(new Date(value), Patp),
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      torrents.map((torrent) => ({
        name: torrent.name,
        eta: torrent.eta,
        ratio: torrent.ratio,
        downloaded: torrent.downloaded,
        size: torrent.size,
        uploaded: torrent.uploaded,
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
      useSortBy,
      usePagination
    );

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <chakra.span pl="4">
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
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default HomePage;
