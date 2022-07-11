import fetch from 'node-fetch';
import 'dotenv/config';
import { IFavourites } from '../../interfaceTS/interface.js';
import { IFavouritesNew } from '../../interfaceTS/interfaceNew.js';

const FAVOURITE_URL = process.env.FAVOURITE_URL as string;

export const getData = async (token: string) => {
  try {
    const response = await fetch(FAVOURITE_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      }
    });
    if (response.ok) {
      const data = (await response.json()) as { items: (IFavourites & IFavouritesNew)[] };
      data.items.forEach((d) => {
        d.bands = d.bandsIds;
        d.tracks = d.tracksIds;
        d.genres = d.genresIds;
        d.artists = d.artistsIds;
      });
      return data.items;
    }
    throw Error('Error favourites service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
