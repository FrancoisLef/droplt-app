import { Box } from '@chakra-ui/react';
import { ImCross, ImMenu } from 'react-icons/im';

interface HamburgerMenuProps {
  onClick?: VoidFunction;
  isOpen: boolean;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { onClick, isOpen } = props;
  return (
    <Box ms="-4" minW={{ base: '12', lg: '76px' }} display={{ lg: 'none' }}>
      <Box as="button" onClick={onClick} p="2" fontSize="xl">
        <Box aria-hidden as={isOpen ? ImCross : ImMenu} />
        <Box srOnly>{isOpen ? 'Close menu' : 'Open menu'}</Box>
      </Box>
    </Box>
  );
};

export default HamburgerMenu;
