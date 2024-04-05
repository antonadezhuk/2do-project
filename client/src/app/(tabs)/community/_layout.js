import { Stack } from 'expo-router';

const CommunityLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Community' }} />
  </Stack>
);

export default CommunityLayout;
