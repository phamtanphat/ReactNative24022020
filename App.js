/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Word from './src/Word';
import Box from './src/Box';
import List from './src/List';
import MyFlatlist from './src/MyFlatlist';
import Form from './src/Form';
import Filter from './src/Filter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore((state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
  if (action.type === 'RESET') {
    return 0;
  }
  return state;
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <List /> */}
        {/* <MyFlatlist /> */}
        {/* <Form/> */}
        {/* <Filter /> */}
        <Provider store={store}>
          <Box />
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
