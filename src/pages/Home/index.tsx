import { useUsersQuery } from '../../graphql';

const HomePage: React.FC = () => {
  const { data } = useUsersQuery();

  return (
    <div>
      {data?.users.map((user) => (
        <div key={user.userId}>{user.firstName}</div>
      ))}
    </div>
  );
};

export default HomePage;
