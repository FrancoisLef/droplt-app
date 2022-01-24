import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    columns: {
      name: 'Nom',
      eta: 'Temps restant',
      ratio: 'Ratio',
      downloaded: 'Reçu',
      uploaded: 'Envoyé',
      size: 'Taille',
      addedAt: 'Ajouté le',
    },
    sortedDescending: 'sorted descending',
    sortedAscending: 'sorted ascending',
  },
});

export default locales;
