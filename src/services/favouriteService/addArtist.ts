import fetch from 'node-fetch';
import 'dotenv/config';
import { IFavourites } from '../../interfaceTS/interface.js';
import { IFavouritesNew } from '../../interfaceTS/interfaceNew.js';

const FAVOURITE_URL = process.env.FAVOURITE_URL as string;

export const addArtist = async (id: string, token: string) => {
  try {
    const response = await fetch(FAVOURITE_URL + '/add', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify({ id, type: 'artists' })
    });
    if (response.ok) {
      const data = (await response.json()) as IFavourites & IFavouritesNew;
      data.id = data._id;
      data.bands = data.bandsIds;
      data.tracks = data.tracksIds;
      data.genres = data.genresIds;
      data.artists = data.artistsIds;
      return data;
    }
    throw Error('Error favourites service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
