import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    heading: 'Login to your account',
    form: {
      username: 'Username',
      usernameRequired: '😟 Your username is empty',
      password: 'Password',
      passwordRequired: '😟 Your password is empty',
      submit: 'Login',
      submitLoading: 'Waiting for connection',
    },
  },
  fr: {
    heading: 'Connectez-vous à votre compte',
    form: {
      username: 'Nom d’utilisateur',
      usernameRequired: '😟 Le nom d’utilisateur est vide',
      password: 'Mot de passe',
      passwordRequired: '😟 Le mot de passe est vide',
      submit: 'Connexion',
      submitLoading: 'En attente de connexion',
    },
  },
});

export default locales;
