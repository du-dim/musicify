import axios from 'axios';
import 'dotenv/config';
import { IBand } from '../../types/interface.js';

const BAND_URL = process.env.BAND_URL as string;
export const bands: IBand[] = await axios.get(BAND_URL);
