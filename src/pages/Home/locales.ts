import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    columns: {
      name: 'Nom',
      ratio: 'Ratio',
      size: 'Taille',
      addedAt: 'Ajouté',
      progress: '#',
    },
    sortedDescending: 'sorted descending',
    sortedAscending: 'sorted ascending',
  },
});

export default locales;
