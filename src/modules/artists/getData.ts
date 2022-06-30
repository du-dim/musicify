import fetch from 'node-fetch';
import 'dotenv/config';
import { IArtist } from '../../types/interface.js';

const ARTIST_URL = process.env.ARTIST_URL as string;

export const getData = async () => {
  try {
    const response = await fetch(ARTIST_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: IArtist[] };
      data.items.forEach((d) => {
        d.id = d._id;
        d.bands = d.bandsIds;
      });
      return data.items;
    }
    throw Error('Ошибка HTTP: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
