import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { withLayoutContext } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { Navigator } = createMaterialBottomTabNavigator();

const Tabs = withLayoutContext(Navigator);

export default () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case 'discover':
              iconName = focused ? 'compass' : 'compass-outline';
              break;
            case 'community':
              iconName = focused ? 'account-group' : 'account-group-outline';
              break;
            case 'messages':
              iconName = focused ? 'chat' : 'chat-outline';
              break;
            case 'profile':
              iconName = focused ? 'account' : 'account-outline';
              break;
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={26} />;
        },
      })}
    >
      <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
      <Tabs.Screen name="community" options={{ title: 'Community' }} />
      <Tabs.Screen name="messages" options={{ title: 'Messages' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
};
