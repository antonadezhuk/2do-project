import { View } from 'react-native';
import { UserCardComponent } from '../../../components';
import defaultStyles from '../../../constants/styles';

const Discover = () => {
  const users = require('../../../mock/users.json');

  return (
    <View style={defaultStyles.container}>
      <UserCardComponent user={users[0]} />
    </View>
  );
};

export default Discover;
