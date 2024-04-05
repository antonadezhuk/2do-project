import { Stack } from 'expo-router';

const MessagesLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Messages' }} />
  </Stack>
);

export default MessagesLayout;
