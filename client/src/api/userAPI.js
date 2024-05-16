import { host } from './index';

export const login = async () => {
  try {
    // const { data } = await host.get('/api/v1/users/11');
    const data = require('../mock/users.json')[0];
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
