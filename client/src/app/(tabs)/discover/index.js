import { View } from 'react-native';
import { UserCardComponent } from '../../../components';

const Discover = () => {
  const users = require('../../../mock/users.json');

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <UserCardComponent user={users[0]} />
    </View>
  );
};

export default Discover;
