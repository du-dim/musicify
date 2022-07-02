import fetch from 'node-fetch';
import 'dotenv/config';
import { ITrack } from '../../types/interface.js';

const TRACK_URL = process.env.TRACK_URL as string;

export const getData = async () => {
  try {
    const response = await fetch(TRACK_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: ITrack[] };
      data.items.forEach((d) => {
        d.id = d._id;
        d.bands = d.bandsIds;
        d.genres = d.genresIds;
      });
      return data.items;
    }
    throw Error('Error tracks service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
