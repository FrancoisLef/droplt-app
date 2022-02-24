import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useTorrentsLazyQuery } from '../../graphql';
import TorrentTable from './components/TorrentTable';

const HomePage: React.FC = () => {
  const [loadTorrents, { data }] = useTorrentsLazyQuery();

  useEffect(() => {
    loadTorrents();
  }, [loadTorrents]);

  return (
    <Box width="full" height="full" mb="4">
      <Box bg="white" padding="6" rounded="lg" mb="6">
        {data ? <TorrentTable data={data} mb="4" /> : null}
      </Box>
    </Box>
  );
};

export default HomePage;
