import { Avatar, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';

import ModalUserProfile from '../../../../components/ModalUserProfile';
import { useAuth } from '../../../../helpers/auth';

const UserProfile: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useAuth();

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <HStack cursor="pointer" spacing="4" px="2" onClick={onOpen}>
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
      <ModalUserProfile isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default UserProfile;
