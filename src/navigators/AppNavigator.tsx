import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../screens/Account';
import { HomeScreen } from '../screens/Home';

export const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ホーム' }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: 'アカウント' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
