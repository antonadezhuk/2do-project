import { selector } from 'recoil';
import { userState } from '../atoms';

const userTagsState = selector({
  key: 'userTags',
  get: ({ get }) => {
    const user = get(userState);
    return user.tags || [];
  },
});
export default userTagsState;
