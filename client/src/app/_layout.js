import { RecoilRoot } from 'recoil';
import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import theme from '../constants/theme';

const AppLayout = () => {
  const isAuthenticated = false;

  return (
    <RecoilRoot>
      <PaperProvider theme={theme}>
        {isAuthenticated ? (
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        ) : (
          <Stack>
            <Stack.Screen name="(auth)/sign-in/index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/sign-up/index" options={{ headerShown: false }} />
          </Stack>
        )}
      </PaperProvider>
    </RecoilRoot>
  );
};

export default AppLayout;
