import { ITrack, IArtist, IAlbum, IFavourites, IBand } from '../../interfaceTS/interface.js';
import { IBandNew } from '../../interfaceTS/interfaceNew.js';
import { getData } from '../../services/bandService/getData.js';
import { getDataId } from '../../services/bandService/getDataId.js';
import { createData } from '../../services/bandService/createData.js';
import { deleteData } from '../../services/bandService/deleteData.js';
import { updateData } from '../../services/bandService/updateData.js';

export const resBands = {
  Album: {
    bands: async (album: IAlbum) =>
      (await getData())?.filter((band) => album.bandsIds.includes(band.id))
  },
  Favourites: {
    artists: async (favourites: IFavourites) =>
      (await getData())?.filter((band) => favourites.artistsIds.includes(band.id))
  },
  Track: {
    bands: async (track: ITrack) =>
      (await getData())?.filter((band) => track.bandsIds.includes(band.id))
  },
  Artist: {
    bands: async (artist: IArtist) =>
      (await getData())?.filter((band) => artist.bandsIds.includes(band.id))
  },
  Band: {
    members: async (band: IBand) => (await getDataId(band._id))?.members
  },
  Query: {
    bands: async () => await getData(),
    band: async (_: any, bandId: { id: string }) => {
      return await getDataId(bandId.id);
    }
  },
  Mutation: {
    createBand: async (_: any, bandInput: { body: IBandNew }, context: { token: string }) => {
      return await createData(bandInput.body, context.token);
    },
    deleteBand: async (_: any, bandId: { id: string }, context: { token: string }) => {
      return await deleteData(bandId.id, context.token);
    },
    updateBand: async (_: any, bandId: { body: IBandNew }, context: { token: string }) => {
      return await updateData(bandId.body, context.token);
    }
  }
};
