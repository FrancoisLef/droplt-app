import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { AuthErrorCodes } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

import InputPassword from '../../components/InputPassword';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import { useAuth } from '../../helpers/auth';
import locales from './locales';

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';

interface LocationStateFrom {
  state?: {
    from?: {
      pathname?: string;
    };
  };
}

type FormData = {
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
      email: IS_DEV ? 'testa@test.fr' : '',
      password: IS_DEV ? 'password1' : '',
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (credentials) => {
    const { email, password } = credentials;
    setIsLoading(true);
    try {
      await login(email, password);
      navigate(location?.state?.from?.pathname || '/', { replace: true });
    } catch (err: any) {
      console.log(err);

      setIsLoading(false);
      switch (err.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setError('password', {
            type: 'manual',
            message: locales.form.passwordNoMatch,
          });
          break;
        case AuthErrorCodes.USER_DELETED:
          setError('email', {
            type: 'manual',
            message: locales.form.emailNotFound,
          });
          break;
        default:
          break;
      }
    }
  });

  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
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
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <form onSubmit={onSubmit}>
            <Stack spacing="6">
              <FormControl id="email" isInvalid={!!errors.email} isRequired>
                <FormLabel>{locales.form.email}</FormLabel>
                <Input
                  autoComplete="email"
                  {...register('email', {
                    required: locales.form.emailRequired,
                  })}
                />
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!errors.password}
                isRequired
              >
                <FormLabel>{locales.form.password}</FormLabel>
                <InputPassword
                  autoComplete="password"
                  {...register('password', {
                    required: locales.form.passwordRequired,
                  })}
                />
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Button
                isLoading={isLoading}
                isDisabled={!isValid}
                spinnerPlacement="end"
                loadingText={locales.form.submitLoading}
                rightIcon={<HiArrowRight />}
                type="submit"
                colorScheme="blue"
                size="lg"
                fontSize="md"
              >
                {locales.form.submit}
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
