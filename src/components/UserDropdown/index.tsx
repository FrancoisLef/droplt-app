import {
  Box,
  Flex,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  Text,
  useMenuButton,
  UseMenuButtonProps,
} from '@chakra-ui/react';

import { useAuth } from '../../helpers/auth';
import UserAvatar from '../UserAvatar';
import locales from './locales';

const ProfileMenuButton = (props: UseMenuButtonProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      {...buttonProps}
      as="button"
      flexShrink={0}
      rounded="full"
      outline="0"
      _focus={{ shadow: 'outline' }}
    >
      <Box srOnly>Open user menu</Box>
      <UserAvatar />
    </Flex>
  );
};

const ProfileDropdown: React.FC = () => {
  const { logout, currentUser } = useAuth();

  return (
    <Menu>
      <ProfileMenuButton />
      <MenuList rounded="md" shadow="lg" py="1" color="gray.900" fontSize="sm">
        <HStack px="3" py="4">
          <UserAvatar />
          <Box lineHeight="1">
            <Text fontWeight="semibold">
              {currentUser?.displayName || currentUser?.email}
            </Text>
            <Text mt="1" fontSize="xs" color="gray.500">
              {currentUser?.email}
            </Text>
          </Box>
        </HStack>
        <MenuItem
          fontWeight="medium"
          fontSize="md"
          onClick={() => logout()}
          color="red.400"
        >
          {locales.logout}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
