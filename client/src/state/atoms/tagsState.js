import { atom } from 'recoil';

const tagsState = atom({
  key: 'tags',
  default: [],
});

export default tagsState;
