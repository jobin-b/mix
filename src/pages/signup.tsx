import React, {useState} from 'react';
import {Layout, Button, Input, useTheme, Text} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import spotifyAuth from '../spotify/spotifyAuth';
import {Link} from '@react-navigation/native';
import axiosInstance from '../AxiosInstance';

function Signup({navigation}): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const theme = useTheme();

  const signupUser = () => {
    axiosInstance.post('/signup', {email, username, password});
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme['color-background-basic'], // Spotify black
    },
    input: {
      marginBottom: 16,
      width: '80%',
      backgroundColor: theme['color-background-alternative'], // Grey background color
      color: theme['color-text-basic'], // White text color
      borderColor: theme['color-border-alternative'], // dark grey border color
      borderWidth: 1,
    },
    button: {
      backgroundColor: theme['color-basic-100'], // White button background color
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 18,
    },
    text: {
      fontSize: 50,
      fontWeight: 'bold',
      paddingBottom: 100,
    },
  });

  return (
    <Layout style={styles.container}>
      <Text style={styles.text}>Queue App</Text>
      <View>
        <Input
          textContentType="emailAddress"
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          textContentType="username"
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          textContentType="password"
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View>
          <Button status="basic" style={styles.button} onPress={signupUser}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Button>
          <Button onPress={() => navigation.navigate('Login')}>
            <Text>Already have an Account? Log in</Text>
          </Button>
        </View>
      </View>
    </Layout>
  );
}

export default Signup;
