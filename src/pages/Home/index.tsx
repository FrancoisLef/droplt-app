import { useQuery } from '@apollo/client';

import { USER_QUERY } from './graphql';

const HomePage: React.FC = () => {
  const { data } = useQuery(USER_QUERY);
  console.log(data);

  return <div>cocou</div>;
};

export default HomePage;
