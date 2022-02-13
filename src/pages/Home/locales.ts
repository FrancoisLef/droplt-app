import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    columns: {
      name: 'Nom',
      size: 'Taille',
      addedAt: 'Ajout',
      progress: '#',
    },
    sortedDescending: 'sorted descending',
    sortedAscending: 'sorted ascending',
  },
});

export default locales;
