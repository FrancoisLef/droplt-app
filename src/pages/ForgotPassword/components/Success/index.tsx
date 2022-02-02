import {
  Button,
  Heading,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

import locales from './locales';

const ForgotPasswordSuccess: React.FC = () => {
  return (
    <>
      <Heading mb="4" as="h2" size="md">
        {locales.title}
      </Heading>
      <Text mb="4" fontSize="sm" textColor={mode('gray.500', 'gray.300')}>
        {locales.subtitle}
      </Text>
      <Button
        as={RouterLink}
        colorScheme="blue"
        variant="link"
        size="sm"
        mt="4"
        leftIcon={<HiArrowLeft />}
        to="/login"
      >
        {locales.backToLogin}
      </Button>
    </>
  );
};

export default ForgotPasswordSuccess;
