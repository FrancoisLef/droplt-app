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

import { InputPassword } from '../../components/InputPassword';
import locales from './locales';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: 'admin',
      password: 'coucou123',
    },
  });

  const onSubmit = (values: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    console.log(values);
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
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{ base: '4', md: '10' }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="6">
              <FormControl
                id="username"
                isInvalid={!!errors.username}
                isRequired
              >
                <FormLabel>{locales.form.username}</FormLabel>
                <Input
                  autoComplete="username"
                  {...register('username', {
                    required: locales.form.usernameRequired,
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
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
