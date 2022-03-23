import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';
import {
  FaDownload,
  FaFile,
  FaServer,
  FaUpload,
  FaWater,
} from 'react-icons/fa';

import NameFilter from './components/NameFilter';
import StatCard from './components/StatCard';
import TorrentTable from './components/TorrentTable';
import { useDashboard, useTorrentsTable } from './hooks';
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
  const { dashboard } = useDashboard();

  return (
    <Box width="full">
      <SimpleGrid
        mb="6"
        columns={{
          base: 2,
          sm: 3,
          md: 4,
          lg: 5,
        }}
        gap={{ base: 6 }}
      >
        <StatCard
          icon={<FaWater />}
          label={locales.torrentCount}
          value={dashboard?.torrents}
        />
        <StatCard
          icon={<FaFile />}
          label={locales.fileCount}
          value={dashboard?.files}
        />
        <StatCard
          icon={<FaServer />}
          label={locales.freeSpace}
          value={prettyBytes(dashboard?.freeSpace || 0)}
        />
        <StatCard
          icon={<FaDownload />}
          label={locales.downloaded}
          value={prettyBytes(dashboard?.downloaded || 0)}
        />
        <StatCard
          icon={<FaUpload />}
          label={locales.uploaded}
          value={prettyBytes(dashboard?.uploaded || 0)}
        />
      </SimpleGrid>
      <Box bg="white" padding="6" rounded="lg">
        <Flex alignItems="center" gap={{ base: 4 }}>
          <Button variant="solid" colorScheme="brand">
            {locales.addTorrent}
          </Button>
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
