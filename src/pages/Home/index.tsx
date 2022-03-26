import { Box, Flex } from '@chakra-ui/react';

import ButtonUpload from '../../components/ButtonUpload';
import Dashboard from './components/Dashboard';
import NameFilter from './components/NameFilter';
import TorrentTable from './components/TorrentTable';
import { useTorrentsTable } from './hooks';
import locales from './locales';

const HomePage: React.FC = () => {
  const {
    data,
    filter,
    torrentsCount,
    initialState,
    setFilter,
    ...tableProps
  } = useTorrentsTable();

  // const onUploadSuccess = () => {
  //   console.log('upload success');
  // };

  return (
    <Box width="full">
      <Dashboard mb="6" />
      <Box bg="white" padding="6" rounded="lg">
        <Flex alignItems="center" gap={{ base: 4 }}>
          <ButtonUpload variant="solid" colorScheme="brand">
            {locales.addTorrent}
          </ButtonUpload>
          <NameFilter count={data.length} value={filter} onChange={setFilter} />
        </Flex>
        {data ? (
          <TorrentTable
            data={data}
            initialState={initialState}
            {...tableProps}
            mb="4"
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default HomePage;
