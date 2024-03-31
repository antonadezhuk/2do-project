import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommunityScreen } from '../screens';

const CommunityStack = createNativeStackNavigator();

const CommunityStackNavigator = () => {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="Community" component={CommunityScreen} />
    </CommunityStack.Navigator>
  );
};

export default CommunityStackNavigator;
