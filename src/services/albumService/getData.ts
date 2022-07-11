import fetch from 'node-fetch';
import 'dotenv/config';
import { IAlbum } from '../../interfaceTS/interface.js';
import { IAlbumNew } from '../../interfaceTS/interfaceNew.js';

const ALBUM_URL = process.env.ALBUM_URL as string;

export const getData = async () => {
  try {
    const response = await fetch(ALBUM_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: (IAlbum & IAlbumNew)[] };
      data.items.forEach((d) => {
        d.id = d._id;
        d.bands = d.bandsIds;
        d.tracks = d.tracksIds;
        d.genres = d.genresIds;
        d.artists = d.artistsIds;
      });
      return data.items;
    }
    throw Error('Error albums service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
