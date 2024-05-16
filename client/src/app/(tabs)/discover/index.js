import { useState } from 'react';
import { View } from 'react-native';
import { UserCardComponent } from '../../../components';
import defaultStyles from '../../../constants/styles';

const Discover = () => {
  const users = require('../../../mock/users.json');

  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const addUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const skipUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  return (
    <View style={defaultStyles.screen}>
      <UserCardComponent user={users[currentUserIndex]} onAdd={addUser} onSkip={skipUser} />
    </View>
  );
};

export default Discover;
