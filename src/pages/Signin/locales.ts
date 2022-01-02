import LocalizedStrings from 'react-localization';

import { ERRORS } from './constants';

const locales = new LocalizedStrings({
  fr: {
    heading: 'Droplt',
    form: {
      email: 'Adresse email',
      emailRequired: 'L’adresse email est vide',
      password: 'Mot de passe',
      passwordRequired: 'Le mot de passe est vide',
      submit: 'Connexion',
      submitLoading: 'En attente de connexion',
    },
    errors: {
      [ERRORS.UNKNOWN_EMAIL]: 'Ce compte n’existe pas',
      [ERRORS.WRONG_PASSWORD]: 'Mot de passe incorrect',
      [ERRORS.COMMON_ERROR]:
        '😥 Une erreur est survenue. Merci de contacter votre administrateur.',
    },
  },
});

export default locales;
