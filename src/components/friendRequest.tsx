import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Input, Layout, Text, useTheme} from '@ui-kitten/components';
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function FriendRequest(sender: Boolean = true): JSX.Element {
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
    <View>
      {/* ICON */}
      {/* onclick={showProfile()} */}
      <View>
        <Text> Name</Text>
        <Text> Username</Text>
      </View>
      {sender ? <Text>Pending...</Text> : <Button>Accept</Button>}
    </View>
  );
}

export default FriendRequest;
