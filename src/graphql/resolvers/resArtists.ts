import { IArtist } from '../../interfaceTS/interface.js';
import { getData } from '../../services/artistService/getData.js';
import { getDataId } from '../../services/artistService/getDataId.js';
import { createData } from '../../services/artistService/createData.js';
import { deleteData } from '../../services/artistService/deleteData.js';
import { updateData } from '../../services/artistService/updateData.js';

export const resArtists = {
  Query: {
    artists: async () => await getData(),
    artist: async (_: any, artistId: { id: string }) => {
      return await getDataId(artistId.id);
    }
  },
  Mutation: {
    createArtist: async (_: any, artistInput: { body: IArtist }, context: { token: string }) => {
      return await createData(artistInput.body, context.token);
    },
    deleteArtist: async (_: any, artistId: { id: string }, context: { token: string }) => {
      return await deleteData(artistId.id, context.token);
    },
    updateArtist: async (_: any, artistId: { body: IArtist }, context: { token: string }) => {
      return await updateData(artistId.body, context.token);
    }
  }
};
