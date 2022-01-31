import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { AuthErrorCodes } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

import { useAuth } from '../../helpers/auth';
import locales from './locales';

type FormData = {
  common: null;
  email: string;
};

const ForgotPasswordPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { resetPassword } = useAuth();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: 'testa@test.fr',
    },
  });

  const onSubmit = handleSubmit(async (credentials) => {
    setIsLoading(true);
    try {
      await resetPassword(credentials.email);
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

  return (
    <>
      <Heading mb="4" as="h2" size="md">
        {locales.title}
      </Heading>
      <Text mb="4" fontSize="sm" textColor={mode('gray.500', 'gray.300')}>
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
            colorScheme="blue"
            size="lg"
            fontSize="md"
          >
            {locales.submit}
          </Button>
        </Stack>
      </form>
      <Button
        as={RouterLink}
        colorScheme="blue"
        isDisabled={isLoading}
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

export default ForgotPasswordPage;
