import fetch from 'node-fetch';
import 'dotenv/config';
import { IFavorites } from '../../types/interface.js';

const FAVOURITE_URL = process.env.FAVOURITE_URL as string;

export const postData = async (body: IFavorites, token: string) => {
  try {
    const response = await fetch(FAVOURITE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IFavorites;
      data.id = data._id;
      return data;
    }
    throw Error('Ошибка HTTP: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
