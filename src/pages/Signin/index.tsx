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
import { HiArrowRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

import InputPassword from '../../components/InputPassword';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import { useAuth } from '../../modules/auth';
import { SubmitFn, useSigninForm } from './hooks';
import locales from './locales';

interface LocationStateFrom {
  state?: {
    from?: {
      pathname?: string;
    };
  };
}

const SigninPage: React.FC = () => {
  const location = useLocation() as LocationStateFrom;
  const navigate = useNavigate();
  const { form, submit, isLoading } = useSigninForm();
  const auth = useAuth();

  const {
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitFn = async (credentials) => {
    const token = await submit(credentials);
    await auth.signin(token);
    navigate(location?.state?.from?.pathname || '/', { replace: true });
  };

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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing="6">
              <FormControl id="email" isInvalid={!!errors.email} isRequired>
                <FormLabel>{locales.form.email}</FormLabel>
                <Input
                  autoComplete="email"
                  {...form.register('email', {
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
                  {...form.register('password', {
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

export default SigninPage;
