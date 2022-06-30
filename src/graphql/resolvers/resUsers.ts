import { IUser } from '../../types/interface.js';
import { postData } from '../../modules/user/postData.js';

export const resUsers = {
  Mutation: {
    createUser: async (_: any, userInput: { body: IUser }) => {
      return await postData(userInput.body);
    }
  }
};
