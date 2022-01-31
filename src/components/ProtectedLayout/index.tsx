import { Button, Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import { HiLogout, HiUsers } from 'react-icons/hi';
import { ImDroplet } from 'react-icons/im';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../helpers/auth';
import { NavLink } from './components/NavLink';
import locales from './locales';

const ProtectedLayout = () => {
  const { logout } = useAuth();

  return (
    <Flex>
      <Flex
        height="100vh"
        width={{ base: '2xs' }}
        direction="column"
        bg="gray.700"
        color="white"
        px={6}
        py={8}
      >
        <Heading mb={8} textAlign="center">
          Droplt
        </Heading>
        <Stack spacing={6}>
          <Stack>
            <NavLink to="/" label={locales.torrents} icon={ImDroplet} />
            <NavLink to="/users" label={locales.users} icon={HiUsers} />
          </Stack>
        </Stack>
        <Spacer />
        <Button
          leftIcon={<HiLogout />}
          colorScheme="red"
          variant="link"
          onClick={() => logout()}
        >
          {locales.signout}
        </Button>
      </Flex>
      <Flex px={6} py={8}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default ProtectedLayout;
