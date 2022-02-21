import { Box } from '@chakra-ui/react';
// import prettyBytes from 'pretty-bytes';
import { useEffect, useState } from 'react';

import { useTorrentsLazyQuery } from '../../graphql';
import SearchInput from './components/SearchInput';
import TorrentTable from './components/TorrentTable';
// import { useTorrents } from './hooks';

const HomePage: React.FC = () => {
  const [loadTorrents, { data }] = useTorrentsLazyQuery();
  const [name, setName] = useState('');
  // const { data } = useTorrents();

  useEffect(() => {
    loadTorrents();
    console.log('load');
  }, [loadTorrents]);

  return (
    <Box width="full" height="full" mb="4">
      <Box bg="white" padding="6" rounded="lg" mb="6">
        <SearchInput name={name} onChange={setName} />
        {data ? <TorrentTable data={data} mb="4" /> : null}
        {/* {data ? (
          <TorrentTable data={data} mb="4" />
        ) : null} */}
        {/* <Table size="md" {...getTableProps()}>
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
        </Table> */}
      </Box>
    </Box>
  );
};

export default HomePage;
