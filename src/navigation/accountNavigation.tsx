import {
  BottomNavigation,
  BottomNavigationTab,
  useTheme,
} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import Home from '../pages/home';
import {StyleSheet} from 'react-native';
import Search from '../pages/search';
import Friends from '../pages/friends';

const {Navigator, Screen} = createBottomTabNavigator();

const theme = useTheme();

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: theme['color-primary-400'],
  },
});

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    indicatorStyle={{
      backgroundColor: theme['color-primary-400'],
      height: 2,
    }}
    style={{backgroundColor: theme['color-primary-600'], height: 80}}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Search" />
    <BottomNavigationTab title="Friends" />
  </BottomNavigation>
);

export const AccountNavigator = () => (
  <Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Search" component={Search} />
    <Screen name="Friends" component={Friends} />
  </Navigator>
);
