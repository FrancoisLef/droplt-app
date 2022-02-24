import { Box, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useTorrentsLazyQuery } from '../../graphql';
import StatCard from './components/StatCard';
import TorrentTable from './components/TorrentTable';
const HomePage: React.FC = () => {
  const [loadTorrents, { data }] = useTorrentsLazyQuery();

  useEffect(() => {
    loadTorrents();
  }, [loadTorrents]);

  return (
    <Box width="full" height="full" mb="4">
      <SimpleGrid mb="6" columns={{ base: 1, md: 4 }} gap={{ base: 6 }}>
        <StatCard label="Torrents" value={data?.torrents?.length} />
      </SimpleGrid>
      <Box bg="white" padding="6" rounded="lg" mb="6">
        {data ? <TorrentTable data={data} mb="4" /> : null}
      </Box>
    </Box>
  );
};

export default HomePage;
