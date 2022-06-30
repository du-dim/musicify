import axios from 'axios';
import 'dotenv/config';
import { IUser } from '../../types/interface.js';

const USER_URL = process.env.USER_URL as string;
export const user: { items: IUser[] } = await axios.get(`${USER_URL}/register`);
