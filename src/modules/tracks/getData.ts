import axios from 'axios';
import 'dotenv/config';
import { ITrack } from '../../types/interface.js';

const TRACK_URL = process.env.TRACK_URL as string;
export const tracks: ITrack[] = await axios.get(TRACK_URL);
