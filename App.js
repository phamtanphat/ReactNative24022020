/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Word from './src/Word';
import Box from './src/Box';
import List from './src/List';
import MyFlatlist from './src/MyFlatlist';
import Form from './src/Form';
import Filter from './src/Filter';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <List />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
