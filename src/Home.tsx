import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {View} from 'react-native-reanimated/lib/typescript/Animated';

function Home({navigation}): JSX.Element {
  useEffect(() => {
    AsyncStorage.getItem('jwt_token').then(token => {
      if (!token) navigation.navigate('Login');
    });
  }, []);

  return <View></View>;
}

export default Home;
