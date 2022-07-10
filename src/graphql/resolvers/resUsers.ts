import { IUserNew } from '../../interfaceTS/interfaceNew.js';
import { createData } from '../../services/userService/createData.js';
import { getData } from '../../services/userService/getJWT.js';

export const resUsers = {
  Query: {},
  Mutation: {
    createUser: async (_: any, userInput: { body: IUserNew }) => {
      return await createData(userInput.body);
    },
    getJwt: async (_: any, userInputJWT: { body: { email: string; password: string } }) => {
      return await getData(userInputJWT.body);
    }
  }
};
