import axios from 'axios';
import 'dotenv/config';

const USER_URL = process.env.USER_URL as string;
export const jwt = async (password: string, email: string) => {
  return await axios({
    method: 'post',
    url: `${USER_URL}/login`,
    data: {
      password,
      email
    }
  });
};
