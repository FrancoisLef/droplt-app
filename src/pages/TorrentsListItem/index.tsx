import ButtonList from '../ButtonList';

export type Item = {
  id: string;
  title: string;
  // les autres champs que tu voudras afficher
};

interface TorrentsListItemProps {
  item: Item;
  // les autres props que tu voudras passer
}

const TorrentsListItem = ({ item }: TorrentsListItemProps) => {
  const { id, title } = item; // ta requête pour récupérer tes items

  return (
    <li>
      <h4>{title}</h4>

      {/* barre de progression */}
      <div>🦄🦄🦄🦄🦄</div>

      <ButtonList></ButtonList>
    </li>
  );
};

export default TorrentsListItem;
