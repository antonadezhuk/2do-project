import { atom } from 'recoil';

const discoverySettingsState = atom({
  key: 'discoverySettings',
  default: {
    gender: 'all',
    distance: 5,
    minimumAge: 16,
    maximumAge: 100,
    tags: [],
  },
});

export default discoverySettingsState;
