import fetch from 'node-fetch';
import 'dotenv/config';
import { ITrackNew } from '../../interfaceTS/interfaceNew.js';
import { ITrack } from '../../interfaceTS/interface.js';

const TRACK_URL = process.env.TRACK_URL as string;

export const getDataId = async (id: string) => {
  try {
    const response = await fetch(`${TRACK_URL}/${id}`);
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
