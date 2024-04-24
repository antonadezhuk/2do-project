import { host } from './index';

export const fetchTags = async () => {
  try {
    const { data } = await host.get('/api/v1/tags');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
