import { IBand } from '../../interfaceTS/interface.js';
import { getData } from '../../services/bandService/getData.js';
import { getDataId } from '../../services/bandService/getDataId.js';
import { createData } from '../../services/bandService/createData.js';
import { deleteData } from '../../services/bandService/deleteData.js';
import { updateData } from '../../services/bandService/updateData.js';

export const resBands = {
  Query: {
    bands: async () => await getData(),
    band: async (_: any, bandId: { id: string }) => {
      return await getDataId(bandId.id);
    }
  },
  Mutation: {
    createBand: async (_: any, bandInput: { body: IBand }, context: { token: string }) => {
      return await createData(bandInput.body, context.token);
    },
    deleteBand: async (_: any, bandId: { id: string }, context: { token: string }) => {
      return await deleteData(bandId.id, context.token);
    },
    updateBand: async (_: any, bandId: { body: IBand }, context: { token: string }) => {
      return await updateData(bandId.body, context.token);
    }
  }
};
