import { ITrack } from '../../types/interface.js';
import { getData } from '../../modules/tracks/getData.js';
import { getTrack } from '../../modules/track/getData.js';
import { postData } from '../../modules/tracks/postData.js';
import { deleteData } from '../../modules/track/deleteData.js';

export const resTracks = {
  Query: {
    tracks: async () => await getData(),
    track: async (_: any, trackId: { id: string }) => {
      return await getTrack(trackId.id);
    }
  },
  Mutation: {
    createTrack: async (_: any, trackInput: { body: ITrack }, context: { token: string }) => {
      return await postData(trackInput.body, context.token);
    },
    deleteTrack: async (_: any, trackId: { id: string }, context: { token: string }) => {
      return await deleteData(trackId.id, context.token);
    },
    updateTrack: async (_: any, trackId: { id: string }, context: { token: string }) => {
      return await deleteData(trackId.id, context.token);
    }
  }
};
