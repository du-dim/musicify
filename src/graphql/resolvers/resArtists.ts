import * as getData from '../../modules/redirectionModules.js';
import { IArtist } from '../../types/interface.js';
import { postData } from '../../modules/artists/postData.js';

export const resArtists = {
  Query: {
    genres: async () => await getData.genres()
  },
  Mutation: {
    createArtist: async (_: any, artistInput: { body: IArtist }, context: { token: string }) => {
      return await postData(artistInput.body, context.token);
    }
  }
};
