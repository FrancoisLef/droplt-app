import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
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
  const { resetPassword } = useAuth();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    // setError,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async (credentials) => {
    try {
      await resetPassword(credentials.email);
    } catch (err: any) {
      console.log(err.code);
      console.log(err.message);
    }
  });

  return (
    <>
      <Button
        as={RouterLink}
        colorScheme="blue"
        variant="link"
        size="sm"
        leftIcon={<HiArrowLeft />}
        to="/login"
      >
        {locales.backToLogin}
      </Button>
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
    </>
  );
};

export default ForgotPasswordPage;
