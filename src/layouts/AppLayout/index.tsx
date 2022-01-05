import { Button, Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import { HiLogout, HiUsers } from 'react-icons/hi';
import { ImDroplet } from 'react-icons/im';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../modules/auth';
import { NavLink } from './components/NavLink';
import locales from './locales';

const AppLayout = () => {
  const auth = useAuth();

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
        <Heading mb={8}>Droplt</Heading>
        <Stack spacing={6}>
          <Stack>
            <NavLink label={locales.torrents} icon={ImDroplet} />
            <NavLink label={locales.users} icon={HiUsers} isActive />
          </Stack>
        </Stack>
        <Spacer />
        <Button
          leftIcon={<HiLogout />}
          colorScheme="red"
          variant="link"
          onClick={() => auth.signout()}
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

export default AppLayout;
