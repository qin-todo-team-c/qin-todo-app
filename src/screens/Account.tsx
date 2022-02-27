import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigatorList } from '../types';

type Props = {
  navigation: StackNavigationProp<NavigatorList, 'Account'>;
};

export const AccountScreen: React.FC<Props> = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text onPress={onPress}>これはSettingsページです。</Text>
    </View>
  );
};
