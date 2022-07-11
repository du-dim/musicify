import { IAlbum, IFavourites } from '../../interfaceTS/interface.js';
import { ITrackNew } from '../../interfaceTS/interfaceNew.js';
import { getData } from '../../services/trackService/getData.js';
import { getDataId } from '../../services/trackService/getDataId.js';
import { createData } from '../../services/trackService/createData.js';
import { deleteData } from '../../services/trackService/deleteData.js';
import { updateData } from '../../services/trackService/updateData.js';

export const resTracks = {
  Album: {
    tracks: async (album: IAlbum) =>
      (await getData())?.filter((track) => album.tracksIds.includes(track.id))
  },
  Favourites: {
    artists: async (favourites: IFavourites) =>
      (await getData())?.filter((track) => favourites.tracksIds.includes(track.id))
  },
  Query: {
    tracks: async () => await getData(),
    track: async (_: any, trackId: { id: string }) => {
      return await getDataId(trackId.id);
    }
  },
  Mutation: {
    createTrack: async (_: any, trackInput: { body: ITrackNew }, context: { token: string }) => {
      return await createData(trackInput.body, context.token);
    },
    deleteTrack: async (_: any, trackId: { id: string }, context: { token: string }) => {
      return await deleteData(trackId.id, context.token);
    },
    updateTrack: async (_: any, trackId: { body: ITrackNew }, context: { token: string }) => {
      return await updateData(trackId.body, context.token);
    }
  }
};
