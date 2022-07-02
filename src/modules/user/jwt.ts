import fetch from 'node-fetch';
import 'dotenv/config';
import { IJWT, IUser } from '../../types/interface.js';

const USER_URL = process.env.USER_URL as string;

export const getData = async (body: IUser) => {
  try {
    const response = await fetch(`${USER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      const jwt = (await response.json()) as IJWT;
      return jwt;
    }
    throw Error('Error users service: ' + response.status);
  } catch (error) {
    console.log(`${error}`);
  }
};
