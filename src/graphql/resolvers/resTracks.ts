import { ITrack } from '../../types/interface.js';
import { getData } from '../../modules/tracks/getData.js';
import { postData } from '../../modules/tracks/postData.js';

export const resTracks = {
  Query: {
    tracks: async () => await getData()
  },
  Mutation: {
    createTrack: async (_: any, trackInput: { body: ITrack }, context: { token: string }) => {
      return await postData(trackInput.body, context.token);
    }
  }
};
