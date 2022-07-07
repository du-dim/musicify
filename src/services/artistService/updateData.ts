import fetch from 'node-fetch';
import 'dotenv/config';
import { IArtist } from '../../interfaceTS/interface.js';

const ARTIST_URL = process.env.ARTIST_URL as string;

export const updateData = async (body: IArtist, token: string) => {
  try {
    const response = await fetch(ARTIST_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IArtist;
      data.id = data._id;
      data.bands = data.bandsIds;
      return data;
    }
    throw Error('Error artists service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
