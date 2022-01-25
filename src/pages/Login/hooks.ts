import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ERRORS } from './constants';
import locales from './locales';

const { NODE_ENV } = process.env;
const IS_DEV = NODE_ENV === 'development';

export interface FormInputs {
  email: string;
  password: string;
}

export type SubmitFn = SubmitHandler<FormInputs>;

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      email: IS_DEV ? 'test@test.fr' : '',
      password: IS_DEV ? 'password' : '',
    },
  });

  const submit: SubmitFn = async (credentials): Promise<string> => {
    setIsLoading(true);

    console.log(credentials);

    return '';

    // const result = await fetch('/api/signin', {
    //   method: 'POST',
    //   body: JSON.stringify(credentials),
    //   headers: { 'Content-Type': 'application/json' },
    // }).then((res) => res.json());

    // setIsLoading(false);

    // switch (result?.error?.message) {
    //   case ERRORS.UNKNOWN_EMAIL:
    //     form.setError('email', { message: locales.form.emailNotFound });
    //     break;
    //   case ERRORS.WRONG_PASSWORD:
    //     form.setError('password', { message: locales.form.passwordNoMatch });
    //     break;
    //   default:
    //     break;
    // }

    // return result.token || '';
  };

  return {
    form,
    submit,
    isLoading,
  };
};
