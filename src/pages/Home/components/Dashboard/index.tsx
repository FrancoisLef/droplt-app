import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';
import {
  FaDownload,
  FaFile,
  FaServer,
  FaUpload,
  FaWater,
} from 'react-icons/fa';

import { useDashboardQuery } from '../../../../graphql';
import StatCard from './components/StatCard';
import locales from './locales';

interface DashboardProps extends SimpleGridProps {}

const HomePage: React.FC<DashboardProps> = ({ ...props }) => {
  const { data } = useDashboardQuery();

  return (
    <SimpleGrid
      columns={{
        base: 2,
        sm: 3,
        md: 4,
        lg: 5,
      }}
      gap={{ base: 6 }}
      {...props}
    >
      <StatCard
        icon={<FaWater />}
        label={locales.torrentCount}
        value={data?.dashboard?.torrents}
      />
      <StatCard
        icon={<FaFile />}
        label={locales.fileCount}
        value={data?.dashboard?.files}
      />
      <StatCard
        icon={<FaServer />}
        label={locales.freeSpace}
        value={prettyBytes(data?.dashboard?.freeSpace || 0)}
      />
      <StatCard
        icon={<FaDownload />}
        label={locales.downloaded}
        value={prettyBytes(data?.dashboard?.downloaded || 0)}
      />
      <StatCard
        icon={<FaUpload />}
        label={locales.uploaded}
        value={prettyBytes(data?.dashboard?.uploaded || 0)}
      />
    </SimpleGrid>
  );
};

export default HomePage;
