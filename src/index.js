import React, {lazy, Suspense} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// Bottom Navigation
import bottomNavigation from './screens/bottomNavigation';

import splashScreen from './screens/splash';
import signInScreen from './screens/signIn';
import signUpScreen from './screens/signUp';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none" initialRouteName={'splashScreen'}>
      <RootStack.Screen name="rootHome" component={bottomNavigation} />
      <RootStack.Screen name="splashScreen" component={splashScreen} />
      <RootStack.Screen name="signInScreen" component={signInScreen} />
      <RootStack.Screen name="signUpScreen" component={signUpScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackScreen;
