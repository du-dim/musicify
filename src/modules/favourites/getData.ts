import fetch from 'node-fetch';
import 'dotenv/config';
import { IFavorites } from '../../types/interface.js';

const FAVOURITE_URL = process.env.FAVOURITE_URL as string;

export const favorites = async () => {
  try {
    const response = await fetch(FAVOURITE_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: IFavorites[] };
      data.items.forEach((d) => {
        d.id = d._id;
      });
      return data.items;
    }
    throw Error('Ошибка HTTP: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
