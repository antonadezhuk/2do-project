import { RecoilRoot } from 'recoil';
import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';

const AppLayout = () => (
  <RecoilRoot>
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  </RecoilRoot>
);

export default AppLayout;
