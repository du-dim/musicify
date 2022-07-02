import { IBand } from '../../types/interface.js';
import { getData } from '../../modules/bands/getData.js';
import { getBand } from '../../modules/band/getData.js';
import { postData } from '../../modules/bands/postData.js';

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
    }
  }
};
