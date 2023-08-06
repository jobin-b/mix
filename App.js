import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Favicon from "./assets/favicon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Favicon} style={styles.image} />
      <Button>Sign in with Spotify</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
