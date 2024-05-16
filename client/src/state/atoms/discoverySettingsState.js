import { atom } from 'recoil';

const discoverySettingsState = atom({
  key: 'discoverySettings',
  default: {
    gender: 'all',
    distance: 5,
    minimumAge: 16,
    maximumAge: 100,
    hobbies: [],
  },
});

export default discoverySettingsState;
