import { Box } from '@chakra-ui/react';

import { useTorrentsQuery } from '../../graphql';
import NameFilter from './components/NameFilter';
// import StatCard from './components/StatCard';
import TorrentTable from './components/TorrentTable';
import { useQueryParams } from './hooks';

const HomePage: React.FC = () => {
  const { data } = useTorrentsQuery();
  const { sortBy, pageSize, pageIndex, filter, setFilter } = useQueryParams();

  return (
    <Box width="full">
      {/* <SimpleGrid mb="6" columns={{ base: 1, md: 4 }} gap={{ base: 6 }}>
        <StatCard label="Torrents" value={data?.torrents?.length} />
      </SimpleGrid> */}
      <Box bg="white" padding="6" rounded="lg">
        <NameFilter count={0} value={filter} onChange={setFilter} />
        {data ? <TorrentTable data={data} mb="4" /> : null}
      </Box>
    </Box>
  );
};

export default HomePage;
