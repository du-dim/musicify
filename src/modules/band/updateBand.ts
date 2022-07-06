import fetch from 'node-fetch';
import 'dotenv/config';
import { IBand } from '../../types/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const updateBand = async (body: IBand, token: string) => {
  try {
    const response = await fetch(BAND_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IBand;
      data.id = data._id;
      data.genres = data.genresIds;
      data.members = data.membersId;
      return data;
    }
    throw Error('Error bands service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
