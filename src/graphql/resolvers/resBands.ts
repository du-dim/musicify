import { IBand } from '../../types/interface.js';
import { getData } from '../../modules/bands/getData.js';
import { getBand } from '../../modules/band/getData.js';
import { postData } from '../../modules/bands/postData.js';
import { deleteData } from '../../modules/band/deleteData.js';

export const resBands = {
  Query: {
    bands: async () => await getData(),
    band: async (_: any, bandId: { id: string }) => {
      return await getBand(bandId.id);
    }
  },
  Mutation: {
    createBand: async (_: any, bandInput: { body: IBand }, context: { token: string }) => {
      return await postData(bandInput.body, context.token);
    },
    deleteBand: async (_: any, bandId: { id: string }, context: { token: string }) => {
      return await deleteData(bandId.id, context.token);
    },
    updateBand: async (_: any, bandId: { id: string }, context: { token: string }) => {
      return await deleteData(bandId.id, context.token);
    }
  }
};
