import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    columns: {
      name: 'Nom',
      size: 'Taille',
      addedAt: 'Ajout',
      progress: '#',
    },
    searchPlaceholder: 'Chercher un torrent par son nom…',
    sortedDescending: 'sorted descending',
    sortedAscending: 'sorted ascending',
    addTorrent: 'Ajouter',
  },
});

export default locales;
