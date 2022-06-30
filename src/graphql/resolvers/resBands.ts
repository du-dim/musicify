import { IBand } from '../../types/interface.js';
import { getData } from '../../modules/bands/getData.js';
import { postData } from '../../modules/bands/postData.js';

export const resBands = {
  Query: {
    bands: async () => await getData()
  },
  Mutation: {
    createBand: async (_: any, bandInput: { body: IBand }, context: { token: string }) => {
      return await postData(bandInput.body, context.token);
    }
  }
};
