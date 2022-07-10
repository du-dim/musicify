import fetch from 'node-fetch';
import 'dotenv/config';
import { IArtistNew } from '../../interfaceTS/interfaceNew.js';
import { IArtist } from '../../interfaceTS/interface.js';

const ARTIST_URL = process.env.ARTIST_URL as string;

export const getData = async () => {
  try {
    const response = await fetch(ARTIST_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: (IArtist & IArtistNew)[] };
      data.items.forEach((d) => {
        d.id = d._id;
        d.bands = d.bandsIds;
      });
      return data.items;
    }
    throw Error('Error artists service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
