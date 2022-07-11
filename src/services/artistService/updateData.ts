import fetch from 'node-fetch';
import 'dotenv/config';
import { IArtistNew } from '../../interfaceTS/interfaceNew.js';
import { IArtist } from '../../interfaceTS/interface.js';

const ARTIST_URL = process.env.ARTIST_URL as string;

export const updateData = async (input: IArtistNew, token: string) => {
  try {
    const body: IArtist = {
      _id: input.id,
      firstName: input.firstName,
      secondName: input.secondName,
      middleName: input.middleName,
      birthDate: input.birthDate,
      birthPlace: input.birthPlace,
      country: input.country,
      bandsIds: input.bands,
      instruments: input.instruments
    };
    const response = await fetch(`${ARTIST_URL}/${body._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IArtistNew & IArtist;
      data.id = data._id;
      data.bands = data.bandsIds;
      return data;
    }
    throw Error('Error artists service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
