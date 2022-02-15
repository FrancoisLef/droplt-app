import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { HiLogout } from 'react-icons/hi';
import { ImDroplet } from 'react-icons/im';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../../helpers/auth';
import Logo from '../../Logo';
import ThemeSwitcher from '../../ThemeSwitcher';
import NavLink from './components/NavLink';
import UserProfile from './components/UserProfile';
import locales from './locales';

const ProtectedLayout: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Flex>
      <Box position="fixed" left={2} top={2}>
        <ThemeSwitcher size="sm" fontSize="sm" />
      </Box>
      <Flex
        height="100vh"
        width={{ base: '2xs' }}
        direction="column"
        bg="gray.700"
        color="white"
        px={6}
        py={8}
      >
        <Heading mb={8}>
          <Logo />
        </Heading>
        <Stack spacing={6}>
          <Stack>
            <NavLink to="/" label={locales.torrents} icon={ImDroplet} />
          </Stack>
        </Stack>
        <Spacer />
        <Stack spacing={6}>
          <UserProfile />
          <Divider borderColor="gray.500" />
          <Button
            leftIcon={<HiLogout />}
            variant="link"
            size="sm"
            onClick={() => logout()}
          >
            {locales.signout}
          </Button>
        </Stack>
      </Flex>
      <Flex height="100vh" direction="column" overflowY="scroll" width="full">
        <Flex px={6} py={8}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProtectedLayout;
