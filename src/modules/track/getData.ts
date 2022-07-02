import fetch from 'node-fetch';
import 'dotenv/config';
import { ITrack } from '../../types/interface.js';

const TRACK_URL = process.env.TRACK_URL as string;

export const getTrack = async (id: string) => {
  try {
    const response = await fetch(`${TRACK_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as ITrack;
      data.id = data._id;
      return data;
    }
    throw Error('Error tracks service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
