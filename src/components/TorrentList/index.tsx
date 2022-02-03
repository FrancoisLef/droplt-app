import TorrentsListItem, { Item } from '../TorrentsListItem';

const TorrentsList: React.FC = () => {
  const items: Item[] = []; // ta requète pour récupérer tes items

  return (
    <ul>
      {items.map((item) => (
        <TorrentsListItem item={item} />
      ))}
    </ul>
  );
};

export default TorrentsList;
