import fetch from 'node-fetch';
import 'dotenv/config';
import { IGenreNew } from '../../interfaceTS/interfaceNew.js';
import { IGenre } from '../../interfaceTS/interface.js';

const GENRE_URL = process.env.GENRE_URL as string;

export const updateData = async (input: IGenreNew, token: string) => {
  try {
    const response = await fetch(`${GENRE_URL}/${input.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(input)
    });
    if (response.ok) {
      const data = (await response.json()) as IGenre & IGenreNew;
      data.id = data._id;
      return data;
    }
    throw Error('Error genres service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
