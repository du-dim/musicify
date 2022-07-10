import fetch from 'node-fetch';
import 'dotenv/config';
import { IBandNew } from '../../interfaceTS/interfaceNew.js';
import { IBand } from '../../interfaceTS/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const updateData = async (input: IBandNew, token: string) => {
  try {
    const body: IBand = {
      _id: input.id,
      name: input.name,
      origin: input.origin,
      website: input.website,
      genresIds: input.genres,
      members: []
    };

    const response = await fetch(`${BAND_URL}/${body._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
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
