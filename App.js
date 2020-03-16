/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle1}>View 1</Text>
        <Text style={styles.textStyle2}>View 2</Text>
        <Text style={styles.textStyle3}>View 3</Text>
        <Text style={styles.textStyle4}>View 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 10,
  },
  textStyle1: {
    flex: 1,
    color: '#f20',
    fontSize: 20,
    fontStyle: 'italic',
    backgroundColor: 'deepskyblue',
  },
  textStyle2: {
    flex: 3,
    color: 'darkorange',
    fontSize: 20,
    fontStyle: 'italic',
    backgroundColor: 'darkslateblue',
  },
  textStyle3: {
    flex: 6,
    color: 'darkorange',
    fontSize: 20,
    fontStyle: 'italic',
    backgroundColor: 'green',
  },
  textStyle4: {
    height: 200,
    color: 'darkorange',
    fontSize: 20,
    fontStyle: 'italic',
    backgroundColor: 'pink',
  },
});
