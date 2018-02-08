import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tomato from './src/components/Tomato';
import Timer from './src/components/Timer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.primaryText}>Pomodoro</Text>

      <Tomato />
      <Timer />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 60,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
