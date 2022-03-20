import { Box, SimpleGrid } from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';

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
      <SimpleGrid mb="6" columns={{ base: 1, md: 4 }} gap={{ base: 6 }}>
        <StatCard
          label={locales.torrentCount}
          value={dashboard?.torrentCount}
        />
        <StatCard
          label={locales.freeSpace}
          value={prettyBytes(dashboard?.freeSpace || 0)}
        />
        <StatCard
          label={locales.transmissionVersion}
          value={dashboard?.version}
        />
      </SimpleGrid>
      <Box bg="white" padding="6" rounded="lg">
        <NameFilter count={data.length} value={filter} onChange={setFilter} />
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
