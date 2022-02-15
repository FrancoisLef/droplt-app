import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
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
import { useEffect, useMemo, useState } from 'react';
import { ImCheckmark, ImSearch } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';
import { Column, useSortBy, useTable } from 'react-table';

import CircularProgress from '../../components/CircularProgress';
import { formatDistanceToNowStrict } from '../../helpers/date';
import { SORT_DIRECTION, SORT_URL_PARAMS } from '../../helpers/sorting';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name') || '');
  const { torrents } = useTorrents(searchParams);

  const columns: ColumnType = useMemo(
    () => [
      {
        Header: locales.columns.addedAt,
        accessor: 'addedAt',
        sortInverted: true,
        isNumeric: true,
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
        Cell: ({ value }) => {
          if (Math.round(value) === 1) {
            return (
              <Icon
                as={ImCheckmark}
                w={3}
                h={3}
                color={mode('blue.300', 'blue.400')}
              />
            );
          }
          return <CircularProgress value={value} thickness="6px" size="40px" />;
        },
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

  const sortByParam = searchParams.get(SORT_URL_PARAMS.SORT_BY);
  const sortDirectionParam = searchParams.get(SORT_URL_PARAMS.SORT_DIRECTION);
  const sortInitialState = [];

  if (sortByParam && sortDirectionParam) {
    sortInitialState.push({
      id: sortByParam,
      desc: sortDirectionParam === SORT_DIRECTION.DESC,
    });
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      autoResetSortBy: false,
      initialState: { pageSize: 5, pageIndex: 0, sortBy: sortInitialState },
      disableMultiSort: true,
    },
    useSortBy
  );

  useEffect(() => {
    const searchByParams = sortBy.reduce(
      (acc, sort) => ({
        ...acc,
        [SORT_URL_PARAMS.SORT_BY]: sort.id,
        [SORT_URL_PARAMS.SORT_DIRECTION]: sort.desc
          ? SORT_DIRECTION.DESC
          : SORT_DIRECTION.ASC,
      }),
      {}
    );

    setSearchParams({
      ...searchByParams,
      ...(name ? { name } : {}),
    });
  }, [searchParams, name, setSearchParams, sortBy]);

  const onSearch = (value: string) => {
    setName(value);
  };

  return (
    <Box width="full">
      <InputGroup>
        <InputLeftElement>
          <Icon as={ImSearch} color={mode('gray.300', 'gray.600')} />
        </InputLeftElement>
        <Input
          mb={4}
          onChange={(e) => onSearch(e.target.value)}
          value={name}
          placeholder={locales.searchPlaceholder}
        />
      </InputGroup>
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
