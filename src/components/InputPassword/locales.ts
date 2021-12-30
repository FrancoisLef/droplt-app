import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  en: {
    show: 'Reveal password',
    hide: 'Mask password',
  },
  fr: {
    show: 'Afficher le mot de passe',
    hide: 'Cacher le mot de passe',
  },
});

export default locales;
