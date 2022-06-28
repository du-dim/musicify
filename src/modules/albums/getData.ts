import axios from 'axios';
import 'dotenv/config';
import { IAlbum } from '../../types/interface.js';

const ALBUM_URL = process.env.ALBUM_URL as string;
export const albums: IAlbum[] = await axios.get(ALBUM_URL);
