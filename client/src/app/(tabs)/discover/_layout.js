import { Stack, useNavigation } from 'expo-router';
import { IconButton } from 'react-native-paper';

const DiscoverLayout = () => {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Discover',
          headerRight: () => (
            <IconButton icon="tune-variant" onPress={() => navigation.navigate('settings')} />
          ),
        }}
      />
      <Stack.Screen name="settings" options={{ title: 'Discovery settings' }} />
    </Stack>
  );
};

export default DiscoverLayout;
