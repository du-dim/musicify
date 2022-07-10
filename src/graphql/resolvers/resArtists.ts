import { IAlbum, IFavourites, IMember } from '../../interfaceTS/interface.js';
import { IArtistNew } from '../../interfaceTS/interfaceNew.js';
import { getData } from '../../services/artistService/getData.js';
import { getDataId } from '../../services/artistService/getDataId.js';
import { createData } from '../../services/artistService/createData.js';
import { deleteData } from '../../services/artistService/deleteData.js';
import { updateData } from '../../services/artistService/updateData.js';

export const resArtists = {
  Album: {
    artists: async (album: IAlbum) =>
      (await getData())?.filter((artist) => album.artistsIds.includes(artist.id))
  },
  Favourites: {
    artists: async (favourites: IFavourites) =>
      (await getData())?.filter((artist) => favourites.artistsIds.includes(artist.id))
  },
  Member: {
    firstName: async (member: IMember) => (await getDataId(member.artistId))?.firstName,
    secondName: async (member: IMember) => (await getDataId(member.artistId))?.secondName,
    middleName: async (member: IMember) => (await getDataId(member.artistId))?.middleName,
    instrument: (member: IMember) => member.instrument,
    years: (member: IMember) => member.years
  },
  Query: {
    artists: async () => await getData(),
    artist: async (_: any, artistId: { id: string }) => {
      return await getDataId(artistId.id);
    }
  },
  Mutation: {
    createArtist: async (_: any, artistInput: { body: IArtistNew }, context: { token: string }) => {
      return await createData(artistInput.body, context.token);
    },
    deleteArtist: async (_: any, artistId: { id: string }, context: { token: string }) => {
      return await deleteData(artistId.id, context.token);
    },
    updateArtist: async (_: any, artistId: { body: IArtistNew }, context: { token: string }) => {
      return await updateData(artistId.body, context.token);
    }
  }
};
