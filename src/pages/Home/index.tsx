import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useTorrentsLazyQuery } from '../../graphql';
import SearchInput from './components/SearchInput';
import TorrentTable from './components/TorrentTable';

const HomePage: React.FC = () => {
  const [loadTorrents, { data }] = useTorrentsLazyQuery();
  const [name, setName] = useState('');

  useEffect(() => {
    loadTorrents();
  }, [loadTorrents]);

  return (
    <Box width="full" height="full" mb="4">
      <Box bg="white" padding="6" rounded="lg" mb="6">
        <SearchInput name={name} onChange={setName} />
        {data ? <TorrentTable name={name} data={data} mb="4" /> : null}
      </Box>
    </Box>
  );
};

export default HomePage;
