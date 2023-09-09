import React, {useState} from 'react';
import {Layout, Button, Input, useTheme, Text} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import axiosInstance from './AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const theme = useTheme();

  const loginUser = async () => {
    try {
      const res = (await axiosInstance.post('/login', {
        username,
        password,
      })) as LoginResponse;
      if (res.error) {
        setError(res.error);
        return;
      }
      await AsyncStorage.setItem('jwt_token', res.token);
      navigation.navigate('Account');
    } catch (err) {
      console.error(err);
    }
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
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      paddingBottom: 100,
    },
    dangerText: {
      fontSize: 18,
      marginBottom: 12,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Queue App</Text>
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error ? (
          <Text status="danger" style={styles.dangerText}>
            {error}
          </Text>
        ) : null}

        <View>
          <Button style={styles.button} status="basic" onPress={loginUser}>
            <Text>Log In</Text>
          </Button>
          <Button onPress={() => navigation.navigate('Signup')}>
            <Text>Dont't have an Account? Sign up</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
