import fetch from 'node-fetch';
import 'dotenv/config';
import { IUser } from '../../interfaceTS/interface.js';
import { IUserNew } from '../../interfaceTS/interfaceNew.js';

const USER_URL = process.env.USER_URL as string;

export const createData = async (input: IUserNew) => {
  const body: IUser = {
    _id: input.id,
    firstName: input.firstName,
    lastName: input.secondName,
    password: input.password,
    email: input.email
  };
  try {
    const response = await fetch(`${USER_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IUser & IUserNew;
      data.id = data._id;
      data.secondName = data.lastName;
      return data;
    }
    throw Error('Error users service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
