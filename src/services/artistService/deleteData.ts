import fetch from 'node-fetch';
import 'dotenv/config';
import { IDelete } from '../../interfaceTS/interfaceNew.js';

const ARTIST_URL = process.env.ARTIST_URL as string;

export const deleteData = async (id: string, token: string) => {
  try {
    const response = await fetch(`${ARTIST_URL}/${id}`, {
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
    throw Error('Error artists service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
