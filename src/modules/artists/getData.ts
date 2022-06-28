import axios from 'axios';
import 'dotenv/config';
import { IArtist } from '../../types/interface.js';

const ARTIST_URL = process.env.ARTIST_URL as string;
export const artists: IArtist[] = await axios.get(ARTIST_URL);
