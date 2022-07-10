import { IAlbumNew } from '../../interfaceTS/interfaceNew.js';
import { getData } from '../../services/albumService/getData.js';
import { getDataId } from '../../services/albumService/getDataId.js';
import { createData } from '../../services/albumService/createData.js';
import { deleteData } from '../../services/albumService/deleteData.js';
import { updateData } from '../../services/albumService/updateData.js';

export const resAlbums = {
  Query: {
    albums: async () => await getData(),
    album: async (_: any, albumId: { id: string }) => {
      return await getDataId(albumId.id);
    }
  },
  Mutation: {
    createAlbum: async (_: any, albumInput: { body: IAlbumNew }, context: { token: string }) => {
      return await createData(albumInput.body, context.token);
    },
    deleteAlbum: async (_: any, albumId: { id: string }, context: { token: string }) => {
      return await deleteData(albumId.id, context.token);
    },
    updateAlbum: async (_: any, albumId: { body: IAlbumNew }, context: { token: string }) => {
      return await updateData(albumId.body, context.token);
    }
  }
};
