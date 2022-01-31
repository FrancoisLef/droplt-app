import { Box, Heading, useColorModeValue as mode } from '@chakra-ui/react';

import ThemeSwitcher from '../../components/ThemeSwitcher';
import locales from './locales';

const ForgotPasswordPage: React.FC = () => {
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
          {locales.heading}
        </Heading>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
