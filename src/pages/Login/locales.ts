import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    heading: 'Droplt',
    form: {
      email: 'Adresse email',
      emailRequired: 'L’adresse email est vide',
      emailNotFound: 'Ce compte n’existe pas',
      password: 'Mot de passe',
      passwordRequired: 'Le mot de passe est vide',
      passwordNoMatch: 'Mot de passe incorrect',
      submit: 'Connexion',
      submitLoading: 'En attente de connexion',
    },
  },
});

export default locales;
