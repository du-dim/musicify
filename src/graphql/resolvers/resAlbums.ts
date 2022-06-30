import * as getData from '../../modules/redirectionModules.js';
import { IAlbum } from '../../types/interface.js';
import { postData } from '../../modules/album/postData.js';

export const resAlbums = {
  Query: {
    albums: async () => await getData.albums()
  },
  Mutation: {
    createGenre: async (_: any, genreInput: { body: IAlbum }, context: { token: string }) => {
      return await postData(albumInput.body, context.token);
    }
  }
};