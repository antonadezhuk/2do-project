import axios from 'axios';

export const host = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_API_URL,
});
