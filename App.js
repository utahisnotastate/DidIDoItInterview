import React from "react"
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import {Portal} from 'react-native-paper';
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
    <Portal.Host>
      <PaperProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DidIDoIt />
      </View>
    </PaperProvider>
    </Portal.Host>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
