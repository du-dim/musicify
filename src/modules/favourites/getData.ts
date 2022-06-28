import axios from 'axios';
import 'dotenv/config';
import { IFavorite } from '../../types/interface.js';

const FAVOURITE_URL = process.env.FAVOURITE_URL as string;
export const favourites: IFavorite[] = await axios.get(FAVOURITE_URL);
