import LocalizedStrings from 'react-localization';

const locales = new LocalizedStrings({
  fr: {
    columns: {
      name: 'Nom',
      size: 'Taille',
      addedAt: 'Ajouté',
      progress: '#',
      actions: 'Actions',
    },
    pagination: {
      firstPage: 'Première page',
      previousPage: 'Page précédente',
      nextPage: 'Page suivante',
      lastPage: 'Dernière page',
    },
    actions: {
      delete: 'Supprimer',
    },
    sortedDescending: 'sorted descending',
    sortedAscending: 'sorted ascending',
    pageSize: 'Afficher {size}',
    addTorrent: 'Ajouter',
  },
});

export default locales;
