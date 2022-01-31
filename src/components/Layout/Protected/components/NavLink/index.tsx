import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps extends LinkProps {
  label: string;
  icon: IconType;
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, to, label, ...rest } = props;
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
      <HStack spacing={4}>
        <Icon as={icon} boxSize="16px" />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  );
};
