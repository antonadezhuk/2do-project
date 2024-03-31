import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import RootTabNavigator from './src/navigation/RootTabNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootTabNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
