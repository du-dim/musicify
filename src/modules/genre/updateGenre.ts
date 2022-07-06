import fetch from 'node-fetch';
import 'dotenv/config';
import { IGenre } from '../../types/interface.js';

const GENRE_URL = process.env.GENRE_URL as string;

export const updateGenre = async (body: IGenre, token: string) => {
  try {
    const response = await fetch(GENRE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
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
