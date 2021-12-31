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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

import { InputPassword } from '../../components/InputPassword';
import { useAuth } from '../../modules/auth';
import locales from './locales';

interface LocationStateFrom {
  state?: {
    from?: {
      pathname?: string;
    };
  };
}

const LoginPage = () => {
  const location = useLocation() as LocationStateFrom;
  const navigate = useNavigate();
  const { user, signin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: 'test@test.fr',
      password: 'password',
    },
  });

  const onSubmit = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    await signin(credentials);
    setIsLoading(false);
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page. This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    navigate(location?.state?.from?.pathname || '/', { replace: true });
  };

  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{ base: '4', lg: '8' }}
    >
      <Box maxW="md" mx="auto">
        <Heading mb="8" textAlign="center" size="xl" fontWeight="extrabold">
          {locales.heading}
        </Heading>
        <Box>
          {user ? (
            <div>
              Bonjour {user.firstName} {user.lastName}
            </div>
          ) : (
            <div>NOT CONNECTED</div>
          )}
        </Box>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="6">
              <FormControl id="email" isInvalid={!!errors.email} isRequired>
                <FormLabel>{locales.form.email}</FormLabel>
                <Input
                  autoComplete="email"
                  {...register('email', {
                    required: locales.form.emailRequired,
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
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
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
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
