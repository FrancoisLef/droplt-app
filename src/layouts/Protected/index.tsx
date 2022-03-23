import { Flex, Heading, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LogoName from '../../components/LogoName';
import UserDropdown from '../../components/UserDropdown';

const ProtectedLayout: React.FC = () => {
  return (
    <Flex direction="column" bg="gray.100" height="100vh">
      <Flex align="center" bg="brand.500" px="6" minH="16">
        <Flex justify="space-between" align="center" w="full">
          <Heading mr="6">
            <Link to="/">
              <LogoName color="white" display="flex" />
            </Link>
          </Heading>

          <HStack spacing="3">
            <UserDropdown />
          </HStack>
        </Flex>
      </Flex>
      <Flex px="4" py="4" overflowY="auto">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default ProtectedLayout;
