import { IGenre } from '../../types/interface.js';
import { getData } from '../../modules/genres/getData.js';
import { getGenre } from '../../modules/genre/getData.js';
import { postData } from '../../modules/genres/postData.js';

export const resGenres = {
  Query: {
    genres: async () => await getData(),
    genre: async (_: any, genreId: { id: string }) => {
      return await getGenre(genreId.id);
    }
  },
  Mutation: {
    createGenre: async (_: any, genreInput: { body: IGenre }, context: { token: string }) => {
      return await postData(genreInput.body, context.token);
    }
  }
};
