import axios from 'axios';
import { User } from '@/api/types';

const BASE_URL = 'https://reqres.in/api';

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const users = async () => {
    const response = await authApi.get<User>('/users');
    return response.data;
  };