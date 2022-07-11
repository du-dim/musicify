import fetch from 'node-fetch';
import 'dotenv/config';
import { IBandNew } from '../../interfaceTS/interfaceNew.js';
import { IBand } from '../../interfaceTS/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const getData = async () => {
  try {
    const response = await fetch(BAND_URL);
    if (response.ok) {
      const data = (await response.json()) as { items: (IBand & IBandNew)[] };
      data.items.forEach((d) => {
        d.id = d._id;
        d.genres = d.genresIds;
      });
      const newdata = data.items as IBandNew[];
      return newdata;
    }
    throw Error('Error bands service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
