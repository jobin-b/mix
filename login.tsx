import React, { useState } from "react";
import { Layout, Button, Input, useTheme, Text } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import spotifyAuth from "./spotify/spotifyAuth";

function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme["color-background-basic"], // Spotify black
    },
    input: {
      marginBottom: 16,
      width: "80%",
      backgroundColor: theme["color-background-alternative"], // Grey background color
      color: theme["color-text-basic"], // White text color
      borderColor: theme["color-border-alternative"], // dark grey border color
      borderWidth: 1,
    },
    button: {
      backgroundColor: theme["color-basic-100"], // White button background color
    },
    buttonText: {
      fontSize: 18,
      color: theme["color-text-basic"], // Spotify black button text color
    },
    text: {
      fontSize: 50,
      fontWeight: "bold",
      paddingBottom: 100,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Queue App</Text>
      <View>
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
        <Button style={styles.button} onPress={spotifyAuth}>
          <Text style={styles.buttonText}>Log In</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Login;
