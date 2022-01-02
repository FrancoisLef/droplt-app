import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../modules/auth';

const HomePage = () => {
  const auth = useAuth();

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
      <Link to="/signin">Login</Link>
      <Button colorScheme="red" onClick={() => auth.signout()}>
        Logout
      </Button>
    </div>
  );
};

export default HomePage;
