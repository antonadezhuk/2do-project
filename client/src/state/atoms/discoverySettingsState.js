import { atom } from 'recoil';

const user = require('../../mock/users.json')[0];

const discoverySettingsState = atom({
  key: 'discoverySettings',
  default: {
    gender: 'all',
    distance: 5,
    minimumAge: 16,
    maximumAge: 100,
    tags: user.tags,
  },
});

export default discoverySettingsState;
