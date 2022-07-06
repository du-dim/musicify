import { IAlbum } from '../../types/interface.js';
import { getData } from '../../modules/albums/getData.js';
import { getAlbum } from '../../modules/album/getData.js';
import { postData } from '../../modules/albums/postData.js';
import { deleteData } from '../../modules/album/deleteData.js';

export const resAlbums = {
  Query: {
    albums: async () => await getData(),
    album: async (_: any, albumId: { id: string }) => {
      return await getAlbum(albumId.id);
    }
  },
  Mutation: {
    createAlbum: async (_: any, albumInput: { body: IAlbum }, context: { token: string }) => {
      return await postData(albumInput.body, context.token);
    },
    deleteAlbum: async (_: any, albumId: { id: string }, context: { token: string }) => {
      return await deleteData(albumId.id, context.token);
    },
    updateAlbum: async (_: any, albumId: { id: string }, context: { token: string }) => {
      return await deleteData(albumId.id, context.token);
    }
  }
};
