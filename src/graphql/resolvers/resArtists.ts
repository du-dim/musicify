import { IArtist } from '../../types/interface.js';
import { getData } from '../../modules/artists/getData.js';
import { postData } from '../../modules/artists/postData.js';

export const resArtists = {
  Query: {
    artists: async () => await getData()
  },
  Mutation: {
    createArtist: async (_: any, artistInput: { body: IArtist }, context: { token: string }) => {
      return await postData(artistInput.body, context.token);
    }
  }
};
