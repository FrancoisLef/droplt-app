import pretty from 'pretty-bytes';

import { useTorrentsQuery } from '../../graphql';

const HomePage: React.FC = () => {
  const { data } = useTorrentsQuery();

  console.log(data);

  return (
    <div>
      {data?.torrents.map((torrent) => (
        <div key={torrent.torrentId}>
          <div>{torrent.name}</div>
          <div>{pretty(torrent.downloaded)}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
