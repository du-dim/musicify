import { IAlbum } from '../../types/interface.js';
import { getData } from '../../modules/albums/getData.js';
import { postData } from '../../modules/albums/postData.js';

export const resAlbums = {
  Query: {
    albums: async () => await getData()
  },
  Mutation: {
    createAlbum: async (_: any, albumInput: { body: IAlbum }, context: { token: string }) => {
      return await postData(albumInput.body, context.token);
    }
  }
};
