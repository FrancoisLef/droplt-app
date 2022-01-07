import { useUsersQuery } from '../../graphql';

const UsersPage: React.FC = () => {
  const { data } = useUsersQuery();

  return (
    <div>
      {data?.users.map((user) => (
        <div key={user.userId}>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
          <span>{user.userId}</span>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
