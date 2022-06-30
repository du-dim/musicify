import fetch from 'node-fetch';
import 'dotenv/config';
import { ITrack } from '../../types/interface.js';

const TRACK_URL = process.env.TRACK_URL as string;

export const tracks = async () => {
  try {
    const response = await fetch(TRACK_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: ITrack[] };
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
