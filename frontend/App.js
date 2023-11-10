import AppNav from './src/navigation/AppNav';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto Regular': require('./assets/fonts/Roboto-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <AppNav />
    </PaperProvider>
  );
}

export default App
