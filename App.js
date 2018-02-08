import React from 'react';
import { StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <h1 style={styles.primaryText}>Funcionou</h1>
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
