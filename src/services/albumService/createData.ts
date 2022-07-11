import fetch from 'node-fetch';
import 'dotenv/config';
import { IAlbum } from '../../interfaceTS/interface.js';
import { IAlbumNew } from '../../interfaceTS/interfaceNew.js';

const ALBUM_URL = process.env.ALBUM_URL as string;

export const createData = async (input: IAlbumNew, token: string) => {
  try {
    const body: IAlbum = {
      _id: input.id,
      name: input.name,
      released: input.released,
      artistsIds: input.artists,
      bandsIds: input.bands,
      tracksIds: input.tracks,
      genresIds: input.genres,
      image: input.image
    };

    const response = await fetch(ALBUM_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
        authorization: token
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IAlbum & IAlbumNew;
      data.id = data._id;
      data.artists = data.artistsIds;
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
