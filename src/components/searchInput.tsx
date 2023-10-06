import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input, Layout, Text, useTheme} from '@ui-kitten/components';
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function SearchInput(): JSX.Element {
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
      {/* SEARCH ICON */}
      <Input />
    </View>
  );
}

export default SearchInput;
