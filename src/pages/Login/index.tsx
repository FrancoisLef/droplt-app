import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { AuthErrorCodes } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowRight } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import InputPassword from '../../components/InputPassword';
import { useAuth } from '../../helpers/auth';
import locales from './locales';

interface LocationStateFrom {
  state?: {
    from?: {
      pathname?: string;
    };
  };
}

type FormData = {
  common: null;
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const location = useLocation() as LocationStateFrom;
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: process.env.NODE_ENV === 'development' ? 'test@test.fr' : '',
      password: process.env.NODE_ENV === 'development' ? 'password' : '',
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (credentials) => {
    const { email, password } = credentials;
    setIsLoading(true);
    try {
      await login(email, password);
      setIsLoading(false);
      navigate(location?.state?.from?.pathname || '/', { replace: true });
    } catch (err: any) {
      setIsLoading(false);
      switch (err.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setError('password', {
            message: locales.error.password.invalid,
          });
          break;
        case AuthErrorCodes.USER_DELETED:
          setError('email', {
            message: locales.error.email.notFound,
          });
          break;
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
          setError('common', {
            message: locales.error.common.tooManyRequests,
          });
          break;
        default:
          setError('common', {
            message: locales.error.common.unknownError,
          });
          break;
      }
    }
  });

  return (
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
        <FormControl id="password" isInvalid={!!errors.password} isRequired>
          <Flex justify="space-between">
            <FormLabel>{locales.label.password}</FormLabel>
            <Button
              mb={2}
              as={RouterLink}
              colorScheme="blue"
              variant="link"
              size="sm"
              to="/forgot-password"
            >
              {locales.forgotPassword}
            </Button>
          </Flex>
          <InputPassword
            autoComplete="password"
            {...register('password', {
              required: locales.error.password.required,
            })}
          />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isLoading}
          isDisabled={!isValid}
          spinnerPlacement="end"
          loadingText={locales.loading}
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
  );
};

export default LoginPage;
