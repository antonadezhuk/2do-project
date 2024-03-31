import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
