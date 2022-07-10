import { IFavouritesNew } from '../../interfaceTS/interfaceNew.js';
import { getData } from '../../services/favouriteService/getData.js';
import { createData } from '../../services/favouriteService/createData.js';

export const resFavourites = {
  Query: {
    favourites: async () => await getData()
  },
  Mutation: {
    createFavourites: async (
      _: any,
      favouritesInput: { body: IFavouritesNew },
      context: { token: string }
    ) => {
      return await createData(favouritesInput.body, context.token);
    }
  }
};
