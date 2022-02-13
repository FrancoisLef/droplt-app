import { useTorrentsQuery } from '../../graphql';
// import { useAuth } from '../../helpers/auth';

const HomePage: React.FC = () => {
  // const { currentUser } = useAuth();
  const { data } = useTorrentsQuery();

  if (data) {
    console.log(data);
  }

  return <div>Protected</div>;
};

export default HomePage;
