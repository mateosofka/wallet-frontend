import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../components/atoms/Logo';

export const LaunchScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Logo customStyle={styles.logo} size={144} />
        <Text style={styles.title}>My App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400',
    position: 'absolute',
    bottom: '9%',
  },
});
