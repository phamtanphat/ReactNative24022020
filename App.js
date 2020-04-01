/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Word from './src/Word';
import Box from './src/Box';
import List from './src/List';
import MyFlatlist from './src/MyFlatlist';
import Form from './src/Form';
import Filter from './src/Filter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
        {/* <MyFlatlist /> */}
        {/* <Form/> */}
        {/* <Filter /> */}
        {/* <Box /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
