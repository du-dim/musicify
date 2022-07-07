import fetch from 'node-fetch';
import 'dotenv/config';
import { IUser } from '../../interfaceTS/interface.js';

const USER_URL = process.env.USER_URL as string;

export const createData = async (body: IUser) => {
  try {
    const response = await fetch(`${USER_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const data = (await response.json()) as IUser;
      data.id = data._id;
      return data;
    }
    throw Error('Error users service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
