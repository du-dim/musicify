import fetch from 'node-fetch';
import 'dotenv/config';
import { IAlbum } from '../../interfaceTS/interface.js';
import { IAlbumNew } from '../../interfaceTS/interfaceNew.js';

const ALBUM_URL = process.env.ALBUM_URL as string;

export const getDataId = async (id: string) => {
  try {
    const response = await fetch(`${ALBUM_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IAlbum & IAlbumNew;
      data.id = data._id;
      data.artists = data.artistsIds;
      data.bands = data.bandsIds;
      data.tracks = data.tracksIds;
      data.genres = data.genresIds;
      return data;
    }
    throw Error('Error albums service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
