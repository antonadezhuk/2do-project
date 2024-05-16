import { atom } from 'recoil';
import { fetchHobbies } from '../../api/hobbyAPI';

const hobbiesState = atom({
  key: 'hobbies',
  default: fetchHobbies(),
});

export default hobbiesState;
