import { useQuery } from '@apollo/client';

import { USER_QUERY } from './graphql';

const HomePage: React.FC = () => {
  const { data, loading, error } = useQuery(USER_QUERY);
  console.log(data, loading, error);

  return <div>Torrents</div>;
};

export default HomePage;
