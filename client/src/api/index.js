import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const host = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_API_URL,
});

const authHost = axios.create({
  baseURL: process.env.EXPO_PUBLIC_AUTH_URL,
});

const authInterceptor = async (config) => {
  const accessToken = await AsyncStorage.getItem('access-token');
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};
authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
