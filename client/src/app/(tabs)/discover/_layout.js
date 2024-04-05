import { Stack } from 'expo-router';

const DiscoverLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Discover' }} />
  </Stack>
);

export default DiscoverLayout;
