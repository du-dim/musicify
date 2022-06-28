import axios from 'axios';
import 'dotenv/config';
import { IGenre } from '../../types/interface.js';

const GENRE_URL = process.env.GENRE_URL as string;
export const genres: IGenre[] = await axios.get(GENRE_URL);
