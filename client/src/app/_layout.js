import { Stack } from 'expo-router';

const AppLayout = () => (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
);

export default AppLayout;
