import { IFavourites } from '../../types/interface.js';
import { getData } from '../../modules/favourites/getData.js';
import { postData } from '../../modules/favourites/postData.js';

export const resFavourites = {
  Query: {
    favourites: async () => await getData()
  },
  Mutation: {
    createFavourites: async (
      _: any,
      favouritesInput: { body: IFavourites },
      context: { token: string }
    ) => {
      return await postData(favouritesInput.body, context.token);
    }
  }
};
