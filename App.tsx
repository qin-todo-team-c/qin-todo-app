import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {box-sizing: border-box;}
  /* other styles */
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
