import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from '@react-navigation/stack';

import { NavigatorList } from '../types';
import { Avatar } from '../components/atoms/Avatar';

type Props = {
  navigation: StackNavigationProp<NavigatorList, 'Home'>;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const onPress = () => navigation.navigate('Account');
  //
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Avatar onPress={onPress} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
