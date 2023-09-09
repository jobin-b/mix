import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './login';
import Signup from './signup';
import Home from './Home';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {AccountNavigator} from './accountNavigation';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="Login" component={Login} />
    <Screen name="Signup" component={Signup} />
    <Screen name="Account" component={AccountNavigator} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
