import fetch from 'node-fetch';
import 'dotenv/config';
import { IDelete } from '../../types/interface.js';

const GENRE_URL = process.env.GENRE_URL as string;

export const deleteData = async (id: string, token: string) => {
  try {
    const response = await fetch(`${GENRE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      }
    });
    if (response.ok) {
      const data = (await response.json()) as IDelete;
      return data;
    }
    throw Error('Error genres service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
