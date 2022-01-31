import { Box, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Logo from '../../Logo';
import ThemeSwitcher from '../../ThemeSwitcher';

const PublicLayout = () => {
  return (
    <Box bg={mode('gray.50', 'inherit')} minH="100vh">
      <Box textAlign="right" pt={2} pr={2}>
        <ThemeSwitcher />
      </Box>
      <Box py={[4, 12]} px={[4, 8]}>
        <Box maxW="md" mx="auto">
          <Heading mb="8" size="2xl" fontWeight="extrabold">
            <Logo />
          </Heading>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicLayout;
