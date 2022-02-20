import { Button, Heading } from '@chakra-ui/react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

import Text from '../../../../components/Text';
import locales from './locales';

const ForgotPasswordSuccess: React.FC = () => {
  return (
    <>
      <Heading mb="4" as="h2" size="md">
        {locales.title}
      </Heading>
      <Text mb="4" fontSize="sm" type="secondary">
        {locales.subtitle}
      </Text>
      <Button
        as={RouterLink}
        colorScheme="brand"
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
