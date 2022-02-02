import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    title: 'Vous allez recevoir un email',
    subtitle:
      'Suivez les instructions de cet email pour réinitialiser le mot de passe de votre compte.',
    backToLogin: 'Retour à la page de connexion',
  },
});

export default locales;
