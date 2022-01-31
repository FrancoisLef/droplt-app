import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    label: {
      email: 'Adresse email',
      password: 'Mot de passe',
    },
    error: {
      email: {
        required: 'L’adresse email est vide',
        notFound: 'Ce compte n’existe pas',
      },
      password: {
        required: 'Le mot de passe est vide',
        invalid: 'Mot de passe incorrect',
      },
      common: {
        unknownError:
          'Une erreur est survenue. Merci de contacter votre administrateur.',
        tooManyRequests:
          'L’accès à ce compte à été temporairement désactivé suite à de nombreuses tentatives de connexion échouées. Vous pouvez réinitialiser votre mot de passe ou réessayer plus tard.',
      },
    },
    submit: 'Connexion',
    loading: 'En attente de connexion',
    forgotPassword: 'Mot de passe oublié ?',
  },
});

export default locales;
