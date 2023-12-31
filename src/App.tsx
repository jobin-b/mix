import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/login';
import {default as darkTheme} from '../theme.json';
import {AppNavigator} from './navigation/navigation.component';
import {StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...darkTheme}}>
        <AppNavigator />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
