import fetch from 'node-fetch';
import 'dotenv/config';
import { IAlbum } from '../../interfaceTS/interface.js';

const ALBUM_URL = process.env.ALBUM_URL as string;

export const updateData = async (body: IAlbum, token: string) => {
  try {
    const response = await fetch(ALBUM_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IAlbum;
      data.id = data._id;
      data.bands = data.bandsIds;
      data.tracks = data.tracksIds;
      data.genres = data.genresIds;
      return data;
    }
    throw Error('Error albums service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
