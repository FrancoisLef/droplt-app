import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { AuthErrorCodes } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

import Text from '../../components/Text';
import { useAuth } from '../../helpers/auth';
import ForgotPasswordSuccess from './components/Success';
import locales from './locales';

type FormData = {
  common: null;
  email: string;
};

const ForgotPasswordPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const { resetPassword } = useAuth();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: process.env.NODE_ENV === 'development' ? 'test@test.fr' : '',
    },
  });

  const onSubmit = handleSubmit(async (credentials) => {
    setIsLoading(true);
    try {
      await resetPassword(credentials.email);
      setIsSuccessful(true);
    } catch (err: any) {
      switch (err.code) {
        case AuthErrorCodes.USER_DELETED:
          setError('email', {
            message: locales.error.email.notFound,
          });
          break;
        default:
          setError('common', {
            message: locales.error.common.unknownError,
          });
          break;
      }
    }
    setIsLoading(false);
  });

  if (isSuccessful) {
    return <ForgotPasswordSuccess />;
  }

  return (
    <>
      <Button
        as={RouterLink}
        colorScheme="brand"
        isDisabled={isLoading}
        variant="link"
        size="sm"
        mb="4"
        leftIcon={<HiArrowLeft />}
        to="/login"
      >
        {locales.backToLogin}
      </Button>
      <Heading mb="4" as="h2" size="md">
        {locales.title}
      </Heading>
      <Text mb="4" fontSize="sm" type="secondary">
        {locales.subtitle}
      </Text>
      <form onSubmit={onSubmit}>
        <Stack spacing="6">
          {errors?.common ? (
            <FormControl isInvalid>
              <FormErrorMessage>{errors?.common?.message}</FormErrorMessage>
            </FormControl>
          ) : null}
          <FormControl id="email" isInvalid={!!errors.email} isRequired>
            <FormLabel>{locales.label.email}</FormLabel>
            <Input
              autoComplete="email"
              {...register('email', {
                required: locales.error.email.required,
              })}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <Button
            isDisabled={!isValid}
            isLoading={isLoading}
            spinnerPlacement="end"
            rightIcon={<HiArrowRight />}
            type="submit"
            colorScheme="brand"
            size="lg"
            fontSize="md"
          >
            {locales.submit}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default ForgotPasswordPage;
