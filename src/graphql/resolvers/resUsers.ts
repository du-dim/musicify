import { IUserNew } from '../../interfaceTS/interfaceNew.js';
import { createData } from '../../services/userService/createData.js';
import { getData } from '../../services/userService/getJWT.js';
import { getDataId } from '../../services/userService/getDataId.js';

export const resUsers = {
  Query: {
    getJwt: async (_: any, userInputJWT: { body: { email: string; password: string } }) => {
      return await getData(userInputJWT.body);
    },
    user: async (_: any, userId: { id: string }) => {
      return await getDataId(userId.id);
    }
  },
  Mutation: {
    createUser: async (_: any, userInput: { body: IUserNew }) => {
      return await createData(userInput.body);
    }
  }
};
