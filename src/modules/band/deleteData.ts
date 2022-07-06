import fetch from 'node-fetch';
import 'dotenv/config';
import { IDelete } from '../../types/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const deleteData = async (id: string, token: string) => {
  try {
    const response = await fetch(`${BAND_URL}/${id}`, {
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
    throw Error('Error bands service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
