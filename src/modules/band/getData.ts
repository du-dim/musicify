import fetch from 'node-fetch';
import 'dotenv/config';
import { IBand } from '../../types/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const getBand = async (id: string) => {
  try {
    const response = await fetch(`${BAND_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IBand;
      data.id = data._id;
      return data;
    }
    throw Error('Error bands service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
