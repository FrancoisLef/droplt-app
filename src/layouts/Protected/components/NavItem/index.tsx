import { Link } from '@chakra-ui/react';
import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

interface NavItemProps extends LinkProps {
  label: string;
}

const DesktopNavItem: React.FC<NavItemProps> = (props) => {
  const { label, to, ...rest } = props;
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      as={RouterLink}
      py={2}
      to={to}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      lineHeight="1.5rem"
      fontWeight="medium"
      aria-current={match ? 'page' : undefined}
      color="whiteAlpha.900"
      _hover={{
        bg: 'brand.400',
        color: 'white',
      }}
      _activeLink={{
        bg: 'brand.300',
        color: 'white',
      }}
      {...rest}
    >
      {label}
    </Link>
  );
};

const MobileNavItem: React.FC<NavItemProps> = (props) => {
  const { label, to, ...rest } = props;
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      as={RouterLink}
      py={2}
      to={to}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.5rem"
      aria-current={match ? 'page' : undefined}
      color="whiteAlpha.900"
      _hover={{
        bg: 'gray.500',
        color: 'white',
      }}
      _activeLink={{
        bg: 'gray.600',
        color: 'white',
      }}
      {...rest}
    >
      {label}
    </Link>
  );
};

const NavItem = {
  Desktop: DesktopNavItem,
  Mobile: MobileNavItem,
};

export default NavItem;
