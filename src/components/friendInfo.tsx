import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Input, Layout, Text, useTheme} from '@ui-kitten/components';
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function FriendInfo(friend: Boolean = true): JSX.Element {
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
        <Text>Friend Name</Text>
        <Text>Friend Username</Text>
      </View>
      {friend ? <Button>Add</Button> : null}
    </View>
  );
}

export default FriendInfo;
