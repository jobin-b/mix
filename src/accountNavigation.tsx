import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import Home from './Home';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="HOME" />
    <BottomNavigationTab title="SEARCH" />
    <BottomNavigationTab title="FRIENDS" />
  </BottomNavigation>
);

export const AccountNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
  </Navigator>
);
