import {
  Avatar,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useAuth } from '../../../../../helpers/auth';

const UserProfile: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return null;
  }

  return (
    <LinkBox as="section">
      <LinkOverlay as={RouterLink} to="/profile"></LinkOverlay>
      <HStack spacing="4" px="2">
        <Avatar
          name={currentUser.displayName || undefined}
          src={currentUser.photoURL || undefined}
        />
        <Flex direction="column">
          <Text fontWeight="medium">{currentUser.displayName}</Text>
          <Text fontSize="sm" lineHeight="shorter">
            {currentUser.email}
          </Text>
        </Flex>
      </HStack>
    </LinkBox>
  );
};

export default UserProfile;
