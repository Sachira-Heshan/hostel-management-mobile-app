import { PaperProvider } from 'react-native-paper';
import AppNav from './src/navigation/AppNav'

const App = () => {
  return (
    <PaperProvider>
      <AppNav />
    </PaperProvider>
  );
}

export default App
