import { Box, Flex, HStack } from '@chakra-ui/react';

import NavItem from '../NavItem';

const MobileNavMenu = (props: { isOpen?: boolean }) => {
  const { isOpen } = props;
  return (
    <Flex
      hidden={!isOpen}
      as="nav"
      direction="column"
      bg="blue.600"
      position="fixed"
      height="calc(100vh - 4rem)"
      top="16"
      insetX="0"
      zIndex={10}
      w="full"
    >
      <Box px="4">
        <NavItem.Mobile to="/torrents" label="Torrents" />
      </Box>
    </Flex>
  );
};

const DesktopNavMenu = () => (
  <HStack spacing="3" flex="1" display={{ base: 'none', lg: 'flex' }}>
    <NavItem.Desktop to="/" label="Torrents" />
  </HStack>
);

const NavMenu = {
  Mobile: MobileNavMenu,
  Desktop: DesktopNavMenu,
};

export default NavMenu;
