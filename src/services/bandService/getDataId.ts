import fetch from 'node-fetch';
import 'dotenv/config';
import { IBandNew } from '../../interfaceTS/interfaceNew.js';
import { IBand } from '../../interfaceTS/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const getDataId = async (id: string) => {
  try {
    const response = await fetch(`${BAND_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IBand & IBandNew;
      data.id = data._id;
      data.genres = data.genresIds;
      const newdata = data as IBandNew;
      return newdata;
    }
    throw Error('Error bands service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
