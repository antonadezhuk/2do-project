import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { withLayoutContext } from 'expo-router';
import { Icon } from 'react-native-paper';

const { Navigator } = createMaterialBottomTabNavigator();

const Tabs = withLayoutContext(Navigator);

const getTabBarIcon = (route, focused, color) => {
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
    default:
      break;
  }

  return <Icon source={iconName} color={color} size={26} />;
};

const TabsLayout = () => (
  <Tabs
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => getTabBarIcon(route, focused, color),
    })}
    shifting
  >
    <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
    <Tabs.Screen name="community" options={{ title: 'Community' }} />
    <Tabs.Screen name="messages" options={{ title: 'Messages' }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
  </Tabs>
);

export default TabsLayout;
