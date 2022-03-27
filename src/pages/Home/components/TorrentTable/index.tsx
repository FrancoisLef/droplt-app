import {
  Button,
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
  FaTrash,
} from 'react-icons/fa';
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table';

import CircularProgress from '../../../../components/CircularProgress';
import Pagination from '../../../../components/Pagination';
import Text from '../../../../components/Text';
import { formatDistanceToNowStrict } from '../../../../helpers/date';
import { TorrentColumns, TorrentRow, TorrentSorting } from '../../types';
import locales from './locales';

interface TorrentTableProps extends TableProps {
  data: TorrentRow[];
  initialState: {
    pageSize: number;
    pageIndex: number;
    sortBy: TorrentSorting;
  };
  setPageIndex: (index: number) => void;
  setPageSize: (size: number) => void;
  setSortBy: (id: string, desc: boolean | undefined) => void;
}

const TorrentTable: React.FC<TorrentTableProps> = ({
  data,
  setPageIndex,
  setPageSize,
  setSortBy,
  initialState,
  ...props
}) => {
  const onDelete = (id: string) => {
    console.log('delete torrent', id);
  };

  const columns: TorrentColumns = useMemo(
    () => [
      {
        accessor: 'progress',
        Header: locales.columns.progress,
        disableGlobalFilter: true,
        isCentered: true,
        isSortable: true,
        width: 1,
        Cell: ({ value }) => {
          if (Math.round(value) === 1) {
            return <Icon as={FaCheck} w={3} h={3} color="brand.500" />;
          }
          return <CircularProgress value={value} thickness="6px" size="40px" />;
        },
      },
      {
        accessor: 'name',
        Header: locales.columns.name,
        width: 20,
        isSortable: true,
        Cell: ({ value }) => <Text fontWeight="medium">{value}</Text>,
      },
      {
        accessor: 'addedAt',
        Header: locales.columns.addedAt,
        disableGlobalFilter: true,
        sortInverted: true,
        isNumeric: true,
        isSortable: true,
        width: 2,
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
        isSortable: true,
        width: 2,
        Cell: ({ value }) => (
          <Text type="secondary" fontWeight="light">
            {prettyBytes(value).replaceAll(' ', ' ')}
          </Text>
        ),
      },
      {
        accessor: 'torrentId',
        Header: locales.columns.actions,
        width: 2,
        isSortable: false,
        Cell: ({ value }) => {
          return (
            <Button
              rightIcon={<FaTrash />}
              onClick={() => onDelete(value)}
              colorScheme="brand"
              size="xs"
              variant="ghost"
            >
              {locales.actions.delete}
            </Button>
          );
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
    setPageSize: setTablePageSize,
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
      columns,
      data,
      disableSortRemove: true, // ease the process of sorting by allowing only 2 values: true || false
      disableMultiSort: true,
      initialState,
    },
    useFlexLayout,
    useSortBy,
    usePagination
  );

  const onFirst = () => {
    gotoPage(0);
    setPageIndex(0);
  };

  const onPrevious = () => {
    previousPage();
    setPageIndex(pageIndex - 1);
  };

  const onNext = () => {
    nextPage();
    setPageIndex(pageIndex + 1);
  };

  const onLast = () => {
    gotoPage(pageCount - 1);
    setPageIndex(pageCount - 1);
  };

  const onPageSize = (size: number) => {
    setTablePageSize(size);
    setPageSize(size);
  };

  return (
    <>
      <Table size="md" {...getTableProps()} {...props}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                const {
                  isSorted,
                  isCentered,
                  isSortable,
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
                      if (!isSortable) {
                        return;
                      }
                      if (defaultSortByOnClick) {
                        defaultSortByOnClick(e);
                      }
                      setSortBy(id, isSortedDesc);
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
          label={locales.pagination.firstPage}
          isDisabled={!canPreviousPage}
          icon={<FaArrowLeft />}
          onClick={onFirst}
          mr="4"
        />
        <Pagination.Control
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
          onPageSize={onPageSize}
          mr="4"
        />
        <Pagination.Control
          label={locales.pagination.nextPage}
          isDisabled={!canNextPage}
          icon={<FaChevronRight />}
          onClick={onNext}
          mr="4"
        />
        <Pagination.Control
          label={locales.pagination.lastPage}
          isDisabled={!canNextPage}
          icon={<FaArrowRight />}
          onClick={onLast}
        />
      </Flex>
    </>
  );
};

export default TorrentTable;
