import { HStack, Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps extends LinkProps {
  isActive?: boolean;
  label: string;
  icon: any;
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, isActive, label, ...rest } = props;
  return (
    <RouterLink to="/">
      <Link
        display="block"
        py={2}
        px={3}
        borderRadius="md"
        transition="all 0.3s"
        fontWeight="medium"
        lineHeight="1.5rem"
        aria-current={isActive ? 'page' : undefined}
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
    </RouterLink>
  );
};
