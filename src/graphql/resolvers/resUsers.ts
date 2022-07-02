import { IUser } from '../../types/interface.js';
import { postData } from '../../modules/user/postData.js';
import { getData } from '../../modules/user/jwt.js';

export const resUsers = {
  Query: {},
  Mutation: {
    createUser: async (_: any, userInput: { body: IUser }) => {
      return await postData(userInput.body);
    },
    getJwt: async (_: any, userInput: { body: IUser }) => {
      return await getData(userInput.body);
    }
  }
};
