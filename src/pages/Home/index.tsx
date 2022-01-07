import { useTorrentsQuery } from '../../graphql';

const HomePage: React.FC = () => {
  const { data } = useTorrentsQuery();

  console.log(data);

  return (
    <div>
      {data?.torrents.map((torrent) => (
        <div key={torrent.torrentId}>
          <span>{torrent.name}</span>
          <span>{torrent.status}</span>
          <span>{torrent.torrentId}</span>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
