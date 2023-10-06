import AsyncStorage from '@react-native-async-storage/async-storage';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {checkSpotifyStatus} from '../spotify/spotifyAuth';

function Home({navigation}): JSX.Element {
  const [username, setUsername] = useState('');
  const [spotifyStatus, setSpotifyStatus] = useState(false);

  const getStatus = async () => {
    const status = await checkSpotifyStatus();
    setSpotifyStatus(status);
  };

  useEffect(() => {
    AsyncStorage.getItem('jwt_token').then(token => {
      if (!token) navigation.navigate('Login');
    });
    AsyncStorage.getItem('username').then(username => {
      setUsername(username);
    });
    getStatus();
  }, []);

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
      backgroundColor: theme['color-background-basic'], // Spotify black
    },
  });

  return (
    <Layout style={styles.container}>
      <Text>Welcome {username}!</Text>
      {spotifyStatus ? (
        <View>
          <Text>Start a Mix</Text>
          <Button
            title="Create"
            onPress={() => navigation.navigate('CreateMix')}
          />
        </View>
      ) : (
        <Text>Spotify is not connected</Text>
      )}
    </Layout>
  );
}

export default Home;
