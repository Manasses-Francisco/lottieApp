import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Home } from './src/screen/Home';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style="auto" />
      <Home/>
    </SafeAreaView>
  );
}

