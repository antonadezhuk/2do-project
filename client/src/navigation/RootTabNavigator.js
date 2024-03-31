import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DiscoverStackNavigator from './DiscoverStackNavigator';
import CommunityStackNavigator from './CommunityStackNavigator';
import MessagesStackNavigator from './MessagesStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="DiscoverStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            switch (route.name) {
              case 'DiscoverStack':
                iconName = focused ? 'compass' : 'compass-outline';
                break;
              case 'CommunityStack':
                iconName = focused ? 'account-group' : 'account-group-outline';
                break;
              case 'MessagesStack':
                iconName = focused ? 'chat' : 'chat-outline';
                break;
              case 'ProfileStack':
                iconName = focused ? 'account' : 'account-outline';
                break;
            }

            return <MaterialCommunityIcons name={iconName} color={color} size={26} />;
          },
        })}
        shifting={true}
      >
        <Tab.Screen
          name="DiscoverStack"
          component={DiscoverStackNavigator}
          options={{ title: 'Discover' }}
        />
        <Tab.Screen
          name="CommunityStack"
          component={CommunityStackNavigator}
          options={{ title: 'Community' }}
        />
        <Tab.Screen
          name="MessagesStack"
          component={MessagesStackNavigator}
          options={{ title: 'Messages' }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStackNavigator}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabNavigator;
