import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import * as React from 'react';

import { useAuth } from '../../helpers/auth';

type ModalUserProfileProps = Omit<ModalProps, 'children'>;

const ModalUserProfile: React.FC<ModalUserProfileProps> = ({
  isOpen,
  onClose,
}) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut non unde
          commodi laboriosam repellendus voluptatibus tempore eligendi odit
          veritatis recusandae quasi a tenetur beatae dolorum incidunt
          aspernatur nostrum, molestias consequuntur.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalUserProfile;
