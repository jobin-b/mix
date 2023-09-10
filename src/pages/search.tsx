import AsyncStorage from '@react-native-async-storage/async-storage';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function Search({navigation}): JSX.Element {
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
      <Text>SEARCH</Text>
    </Layout>
  );
}

export default Search;
