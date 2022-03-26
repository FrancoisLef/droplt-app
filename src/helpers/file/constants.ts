import env from '../env';

const FILE_TORRENT_TYPE = ['.torrent'];

export const FILE_TYPE = {
  TORRENT: FILE_TORRENT_TYPE.join(','),
};

export const FILE_UPLOAD_ENDPOINT = `${env.API_ENDPOINT}/upload`;
