import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { HiArrowRight } from 'react-icons/hi';

import locales from './locales';

type FormData = {
  common: null;
  email: string;
};

const ForgotPasswordPage: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async (credentials) => {
    console.log(credentials);
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
        <Button
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

export default ForgotPasswordPage;
