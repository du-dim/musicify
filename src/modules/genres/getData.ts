import fetch from 'node-fetch';
import 'dotenv/config';
import { IGenre } from '../../types/interface.js';

const GENRE_URL = process.env.GENRE_URL as string;

export const getData = async () => {
  try {
    const response = await fetch(GENRE_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: IGenre[] };
      data.items.forEach((d) => {
        d.id = d._id;
      });
      return data.items;
    }
    throw Error('Error genres service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
