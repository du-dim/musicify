import fetch from 'node-fetch';
import 'dotenv/config';
import { ITrack } from '../../types/interface.js';

const TRACK_URL = process.env.TRACK_URL as string;

export const postData = async (body: ITrack, token: string) => {
  try {
    const response = await fetch(TRACK_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as ITrack;
      data.id = data._id;
      data.bands = data.bandsIds;
      data.genres = data.genresIds;
      return data;
    }
    throw Error('Ошибка HTTP: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
