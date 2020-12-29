import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homeScreen from '../home';
import messageScreen from '../message';

const Tab = createBottomTabNavigator();
const bottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={homeScreen} />
      <Tab.Screen name="message" component={messageScreen} />
    </Tab.Navigator>
  );
};
export default bottomNavigation;
