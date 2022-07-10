import { IBand, ITrack, IAlbum, IFavourites } from '../../interfaceTS/interface.js';
import { IGenreNew } from '../../interfaceTS/interfaceNew.js';
import { getData } from '../../services/genreService/getData.js';
import { getDataId } from '../../services/genreService/getDataId.js';
import { createData } from '../../services/genreService/createData.js';
import { deleteData } from '../../services/genreService/deleteData.js';
import { updateData } from '../../services/genreService/updateData.js';

export const resGenres = {
  Album: {
    genres: async (album: IAlbum) =>
      (await getData())?.filter((genre) => album.genresIds.includes(genre.id))
  },
  Favourites: {
    artists: async (favourites: IFavourites) =>
      (await getData())?.filter((genre) => favourites.genresIds.includes(genre.id))
  },
  Track: {
    genres: async (track: ITrack) =>
      (await getData())?.filter((genre) => track.genresIds.includes(genre.id))
  },
  Band: {
    genres: async (band: IBand) =>
      (await getData())?.filter((genre) => band.genresIds.includes(genre.id))
  },
  Query: {
    genres: async () => await getData(),
    genre: async (_: any, genreId: { id: string }) => {
      return await getDataId(genreId.id);
    }
  },
  Mutation: {
    createGenre: async (_: any, genreInput: { body: IGenreNew }, context: { token: string }) => {
      return await createData(genreInput.body, context.token);
    },
    deleteGenre: async (_: any, genreId: { id: string }, context: { token: string }) => {
      return await deleteData(genreId.id, context.token);
    },
    updateGenre: async (_: any, genreInput: { body: IGenreNew }, context: { token: string }) => {
      return await updateData(genreInput.body, context.token);
    }
  }
};
