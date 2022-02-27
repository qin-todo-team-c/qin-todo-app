import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { NavigatorList } from '../types';

type Props = {
  navigation: StackNavigationProp<NavigatorList, 'Account'>;
};

export const AccountScreen: React.FC<Props> = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={style.container}>
      <Text onPress={onPress}>これはSettingsページです。</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
