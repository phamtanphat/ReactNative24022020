/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './src/common/Button';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button text="Alert" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
