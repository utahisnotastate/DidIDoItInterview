import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import DidIDoIt from "./src/dididoit";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <DidIDoIt />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
