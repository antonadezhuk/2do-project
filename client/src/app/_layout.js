import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';

const AppLayout = () => (
  <PaperProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  </PaperProvider>
);

export default AppLayout;
