import * as getData from '../modules/redirectionModules.js';
import { IGenre } from '../types/interface.js';
import { postData } from '../modules/genres/postData.js';

export const resolvers = {
  Query: {
    // artists: () => getData.artists,
    // bands: () => getData.bands,
    // albums: () => getData.albums,
    genres: async () => await getData.genres()
    // tracks: () => getData.tracks,
    // favourites: () => getData.favourites
    // artist: (id: string) => getData.artists.find((obj) => obj._id === id),
    // band: (id: string) => getData.bands.find((obj) => obj._id === id),
    // album: (id: string) => getData.albums.find((obj) => obj._id === id),
    // genre: (id: string) => getData.genres.find((obj) => obj._id === id),
    // track: (id: string) => getData.tracks.find((obj) => obj._id === id)
  },
  Mutation: {
    createGenre: async (_: any, genreInput: { body: IGenre }, context: { token: string }) => {
      return await postData(genreInput.body, context.token);
    }
  }
};
