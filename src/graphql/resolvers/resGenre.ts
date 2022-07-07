import { IGenre } from '../../interfaceTS/interface.js';
import { getData } from '../../services/genreService/getData.js';
import { getDataId } from '../../services/genreService/getDataId.js';
import { createData } from '../../services/genreService/createData.js';
import { deleteData } from '../../services/genreService/deleteData.js';
import { updateData } from '../../services/genreService/updateData.js';

export const resGenres = {
  Query: {
    genres: async () => await getData(),
    genre: async (_: any, genreId: { id: string }) => {
      return await getDataId(genreId.id);
    }
  },
  Mutation: {
    createGenre: async (_: any, genreInput: { body: IGenre }, context: { token: string }) => {
      return await createData(genreInput.body, context.token);
    },
    deleteGenre: async (_: any, genreId: { id: string }, context: { token: string }) => {
      return await deleteData(genreId.id, context.token);
    },
    updateGenre: async (_: any, genreInput: { body: IGenre }, context: { token: string }) => {
      return await updateData(genreInput.body, context.token);
    }
  }
};
