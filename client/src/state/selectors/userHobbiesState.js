import { selector } from 'recoil';
import { userState } from '../atoms';

const userHobbiesState = selector({
  key: 'userHobbies',
  get: ({ get }) => {
    const user = get(userState);
    return user.hobbies || [];
  },
});
export default userHobbiesState;
