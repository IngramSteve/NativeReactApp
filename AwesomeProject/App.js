import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Cat from "./components/firstSteps/Cat";

export default function App() {
  return (
    <View>
      <Text><Cat /></Text>
      <StatusBar style="auto" />
    </View>
  );
}
