import { Flex, Heading, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LogoName from '../../components/LogoName';
import UserDropdown from '../../components/UserDropdown';
import HamburgerMenu from './components/HamburgerMenu';
import NavMenu from './components/NavMenu';
import { useMobileMenuState } from './hooks';

const ProtectedLayout: React.FC = () => {
  const { isMenuOpen, toggle } = useMobileMenuState();

  return (
    <Flex direction="column" bg="gray.100" height="100vh">
      <Flex align="center" bg="brand.500" px="6" minH="16">
        <Flex justify="space-between" align="center" w="full">
          <NavMenu.Mobile isOpen={isMenuOpen} />

          {/* Desktop Logo placement */}
          <Heading mr="6" size="lg">
            <Link to="/">
              <LogoName color="white" display={{ base: 'none', lg: 'flex' }} />
            </Link>
          </Heading>

          {/* Desktop Navigation Menu */}
          <NavMenu.Desktop />

          {/* Mobile Logo placement */}
          <Heading mr="4" size="lg">
            <LogoName color="white" display={{ base: 'flex', lg: 'none' }} />
          </Heading>

          <HStack spacing="3">
            <UserDropdown />
          </HStack>
          <HamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
        </Flex>
      </Flex>

      <Flex px={6} py={8} overflow="auto">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default ProtectedLayout;
