import fetch from 'node-fetch';
import 'dotenv/config';
import { IBandNew, IMemberNew } from '../../interfaceTS/interfaceNew.js';
import { IBand, IMember } from '../../interfaceTS/interface.js';

const BAND_URL = process.env.BAND_URL as string;

export const createData = async (input: IBandNew, token: string) => {
  const body: IBand = {
    _id: input.id,
    name: input.name,
    origin: input.origin,
    website: input.website,
    genresIds: input.genres,
    members: []
  };
  input.members.forEach((m, i) => {
    body.members[i].artistId = m.artistId;
    body.members[i].years = m.years;
    body.members[i].instrument = m.instrument;
  });

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
