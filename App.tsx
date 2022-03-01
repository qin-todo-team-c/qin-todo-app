import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FirstInput } from './src/components/atoms/Input';
import { AtmText } from './src/components/atoms/Text';
import { Title } from './src/components/atoms/Title';
import { Header } from './src/components/organisms/Header';

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Title when="today" />
        <FirstInput />
        <AtmText>Hello World</AtmText>
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
