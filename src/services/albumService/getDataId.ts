import fetch from 'node-fetch';
import 'dotenv/config';
import { IAlbum } from '../../interfaceTS/interface.js';

const ALBUM_URL = process.env.ALBUM_URL as string;

export const getDataId = async (id: string) => {
  try {
    const response = await fetch(`${ALBUM_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IAlbum;
      data.id = data._id;
      return data;
    }
    throw Error('Error albums service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
