import { Box, Heading } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

import LogoName from '../../components/LogoName';

const PublicLayout: React.FC = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box py={12} px={2}>
        <Box maxW="md" mx="auto">
          <Heading mb={10} size="3xl">
            <Link to="/login">
              <LogoName />
            </Link>
          </Heading>
          <Box bg="white" py={[4, 8]} px={[4, 10]} shadow="base" rounded="lg">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicLayout;
