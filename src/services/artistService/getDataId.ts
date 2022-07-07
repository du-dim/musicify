import fetch from 'node-fetch';
import 'dotenv/config';
import { IArtist } from '../../interfaceTS/interface.js';

const ARTIST_URL = process.env.ARTIST_URL as string;

export const getDataId = async (id: string) => {
  try {
    const response = await fetch(`${ARTIST_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IArtist;
      data.id = data._id;
      return data;
    }
    throw Error('Error artists service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
