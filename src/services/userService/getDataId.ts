import fetch from 'node-fetch';
import 'dotenv/config';
import { IUserNew } from '../../interfaceTS/interfaceNew.js';
import { IUser } from '../../interfaceTS/interface.js';

const USER_URL = process.env.USER_URL as string;

export const getDataId = async (id: string) => {
  try {
    const response = await fetch(`${USER_URL}/${id}`);
    if (response.ok) {
      const data = (await response.json()) as IUserNew & IUser;
      data.id = data._id;
      return data;
    }
    throw Error('Error genres service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
