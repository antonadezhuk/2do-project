import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessagesScreen } from '../screens';

const MessagesStack = createNativeStackNavigator();

const MessagesStackNavigator = () => {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name="Messages" component={MessagesScreen} />
    </MessagesStack.Navigator>
  );
};

export default MessagesStackNavigator;
