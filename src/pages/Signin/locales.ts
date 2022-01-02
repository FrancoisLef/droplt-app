import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    heading: 'Droplt',
    form: {
      email: 'Adresse email',
      emailRequired: '😟 L’adresse email est vide',
      password: 'Mot de passe',
      passwordRequired: '😟 Le mot de passe est vide',
      submit: 'Connexion',
      submitLoading: 'En attente de connexion',
    },
  },
});

export default locales;
