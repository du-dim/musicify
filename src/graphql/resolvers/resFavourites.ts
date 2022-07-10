import { getData } from '../../services/favouriteService/getData.js';
import { addArtist } from '../../services/favouriteService/addArtist.js';
import { addTrack } from '../../services/favouriteService/addTrack.js';
import { addGenre } from '../../services/favouriteService/addGenre.js';
import { addBand } from '../../services/favouriteService/addBand.js';

export const resFavourites = {
  Query: {
    favourites: async (_: any, _2: any, context: { token: string }) => {
      return await getData(context.token);
    }
  },
  Mutation: {
    addArtist: async (_: any, artistId: { id: string }, context: { token: string }) => {
      return await addArtist(artistId.id, context.token);
    },
    addTrack: async (_: any, trackId: { id: string }, context: { token: string }) => {
      return await addTrack(trackId.id, context.token);
    },
    addGenre: async (_: any, genreId: { id: string }, context: { token: string }) => {
      return await addGenre(genreId.id, context.token);
    },
    addBand: async (_: any, bandId: { id: string }, context: { token: string }) => {
      return await addBand(bandId.id, context.token);
    }
  }
};
