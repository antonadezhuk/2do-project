import { atom } from 'recoil';

const tags = require('../../mock/tags.json');

const tagsState = atom({
  key: 'tags',
  default: tags,
});

export default tagsState;
