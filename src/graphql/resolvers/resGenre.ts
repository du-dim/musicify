import { IGenre } from '../../types/interface.js';
import { getData } from '../../modules/genres/getData.js';
import { postData } from '../../modules/genres/postData.js';

export const resGenres = {
  Query: {
    genres: async () => await getData()
  },
  Mutation: {
    createGenre: async (_: any, genreInput: { body: IGenre }, context: { token: string }) => {
      return await postData(genreInput.body, context.token);
    }
  }
};
