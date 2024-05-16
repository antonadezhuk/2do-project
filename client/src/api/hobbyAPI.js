import { host } from './index';

export const fetchHobbies = async () => {
  try {
    console.log('Fetching Hobbies');
    const { data } = await host.get('/api/v1/hobbies');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
