import { Box, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import ThemeSwitcher from '../ThemeSwitcher';
import locales from './locales';

const PublicLayout = () => {
  return (
    <Box
      bg={mode('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{ base: '4', lg: '8' }}
    >
      <Box textAlign="right">
        <ThemeSwitcher />
      </Box>
      <Box maxW="md" mx="auto">
        <Heading mb="8" textAlign="center" size="xl" fontWeight="extrabold">
          {locales.title}
        </Heading>
        <Box
          bg={mode('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicLayout;
