import fetch from 'node-fetch';
import 'dotenv/config';
import { ITrackNew } from '../../interfaceTS/interfaceNew.js';
import { ITrack } from '../../interfaceTS/interface.js';
const TRACK_URL = process.env.TRACK_URL as string;

export const createData = async (input: ITrackNew, token: string) => {
  try {
    const body: ITrack = {
      _id: input.id,
      title: input.title,
      albumId: input.album,
      bandsIds: input.bands,
      duration: input.duration,
      released: input.released,
      genresIds: input.genres
    };

    const response = await fetch(TRACK_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as ITrack & ITrackNew;
      data.id = data._id;
      data.album = data.albumId;
      data.bands = data.bandsIds;
      data.genres = data.genresIds;
      return data;
    }
    throw Error('Error tracks service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
