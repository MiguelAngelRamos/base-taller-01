import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { FlatListScreen } from './src/screens/FlatListScreen';

const App = () => {
  return(
    <SafeAreaProvider>
      <FlatListScreen/>
    </SafeAreaProvider>
    
  );
}

export default App;
