import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from '../screens';

const DiscoverStack = createNativeStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
    </DiscoverStack.Navigator>
  );
};

export default DiscoverStackNavigator;
