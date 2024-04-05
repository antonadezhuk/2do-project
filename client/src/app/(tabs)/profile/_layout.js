import { Stack } from 'expo-router';

const ProfileLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Profile' }} />
  </Stack>
);

export default ProfileLayout;
