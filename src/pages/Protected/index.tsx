import { useAuth } from '../../helpers/auth';

const HomePage: React.FC = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return <div>Protected</div>;
};

export default HomePage;
