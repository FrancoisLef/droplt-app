import { useForm } from 'react-hook-form';

const { NODE_ENV } = process.env;

const isDev = NODE_ENV === 'development';

export const useSigninForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: isDev ? 'test@test.fr' : '',
      password: isDev ? 'password' : '',
    },
  });
};
