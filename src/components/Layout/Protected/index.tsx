import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { HiLogout } from 'react-icons/hi';
import { ImDroplet } from 'react-icons/im';
import { Outlet } from 'react-router-dom';

import { useAuth } from '../../../helpers/auth';
import Logo from '../../Logo';
import HamburgerMenu from './components/HamburgerMenu';
import NavLink from './components/NavLink';
import NavMenu from './components/NavMenu';
import UserProfile from './components/UserProfile';
import { useMobileMenuState } from './hooks';
import locales from './locales';

const ProtectedLayout: React.FC = () => {
  const { logout } = useAuth();
  const { isMenuOpen, toggle } = useMobileMenuState();

  return (
    <Flex direction="column" bg="gray.100" height="100vh">
      <Flex align="center" bg="white" px="6" minH="16">
        <Flex justify="space-between" fontSize="3xl" align="center" w="full">
          <NavMenu.Mobile isOpen={isMenuOpen} />

          {/* Desktop Logo placement */}
          <Logo
            display={{ base: 'none', lg: 'flex' }}
            flexShrink={0}
            h="5"
            marginEnd="10"
          />

          {/* Desktop Navigation Menu */}
          <NavMenu.Desktop />

          {/* Mobile Logo placement */}
          <Logo display={{ base: 'flex', lg: 'none' }} flexShrink={0} h="5" />

          <HStack spacing="3">
            {/* <Notification display={{ base: 'none', lg: 'inline-flex' }} />
            <ProfileDropdown /> */}
          </HStack>
          <HamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
        </Flex>
      </Flex>

      {/* <PageHeader /> */}
      <Flex px={6} py={8} overflow="auto">
        <Outlet />
      </Flex>
      {/* <PageContent /> */}
    </Flex>
  );

  // return (
  //   <Flex bg="gray.100">
  //     <Flex
  //       height="100vh"
  //       width={{ base: '2xs' }}
  //       direction="column"
  //       bg="gray.700"
  //       color="white"
  //       px={6}
  //       py={8}
  //     >
  //       <Heading mb={8}>
  //         <Logo />
  //       </Heading>
  //       <Stack spacing={6}>
  //         <Stack>
  //           <NavLink to="/" label={locales.torrents} icon={ImDroplet} />
  //         </Stack>
  //       </Stack>
  //       <Spacer />
  //       <Stack spacing={6}>
  //         <UserProfile />
  //         <Divider borderColor="gray.500" />
  //         <Button
  //           leftIcon={<HiLogout />}
  //           variant="link"
  //           size="sm"
  //           onClick={() => logout()}
  //         >
  //           {locales.signout}
  //         </Button>
  //       </Stack>
  //     </Flex>
  //     <Flex height="100vh" direction="column" overflowY="scroll" width="full">
  //       <Flex px={6} py={8}>
  //         <Outlet />
  //       </Flex>
  //     </Flex>
  //   </Flex>
  // );
};

export default ProtectedLayout;
