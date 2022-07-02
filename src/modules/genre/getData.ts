import fetch from 'node-fetch';
import 'dotenv/config';
import { IGenre } from '../../types/interface.js';

const GENRE_URL = process.env.GENRE_URL as string;

export const getGenre = async (id: string) => {
  try {
    const response = await fetch(`${GENRE_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IGenre;
      data.id = data._id;
      return data;
    }
    throw Error('Error genres service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
