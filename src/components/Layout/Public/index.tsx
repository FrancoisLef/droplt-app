import { Box, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Logo from '../../Logo';
import ThemeSwitcher from '../../ThemeSwitcher';

const PublicLayout: React.FC = () => {
  return (
    <Box bg={mode('gray.50', 'inherit')} minH="100vh">
      <Box textAlign="right" pt={2} pr={2}>
        <ThemeSwitcher />
      </Box>
      <Box py={[2, 12]} px={[4, 8]}>
        <Box maxW="md" mx="auto">
          <Heading mb="8" size="2xl" fontWeight="extrabold">
            <Logo />
          </Heading>
          <Box
            bg={mode('white', 'gray.700')}
            py={[4, 8]}
            px={[4, 10]}
            shadow="base"
            rounded="lg"
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicLayout;
