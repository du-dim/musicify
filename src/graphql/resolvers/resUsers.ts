import { IUser } from '../../interfaceTS/interface.js';
import { createData } from '../../services/userService/createData.js';
import { getData } from '../../services/userService/getJWT.js';

export const resUsers = {
  Query: {},
  Mutation: {
    createUser: async (_: any, userInput: { body: IUser }) => {
      return await createData(userInput.body);
    },
    getJwt: async (_: any, userInput: { body: IUser }) => {
      return await getData(userInput.body);
    }
  }
};
