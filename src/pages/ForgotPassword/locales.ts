import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    label: {
      email: 'Adresse email',
    },
    error: {
      email: {
        required: 'L’adresse email est vide',
        notFound: 'Ce compte n’existe pas',
      },
      common: {
        unknownError:
          'Une erreur est survenue. Merci de contacter votre administrateur.',
        tooManyRequests:
          'L’accès à ce compte à été temporairement désactivé suite à de nombreuses tentatives de connexion échouées. Vous pouvez réinitialiser votre mot de passe ou réessayer plus tard.',
      },
    },
    submit: 'Réinitialiser mon mot de passe',
    backToLogin: 'Connexion',
  },
});

export default locales;
