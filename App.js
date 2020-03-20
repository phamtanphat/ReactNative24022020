/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Word from './src/Word';

const words = [
  {id: '1', en: 'One', vn: 'Mot'},
  {id: '2', en: 'Two', vn: 'Hai'},
  {id: '3', en: 'Three', vn: 'Ba'},
  {id: '4', en: 'Four', vn: 'Bon'},
  {id: '5', en: 'Five', vn: 'Nam'},
  {id: '6', en: 'Six', vn: 'Sau'},
  {id: '7', en: 'Seven', vn: 'Bay'},
  {id: '8', en: 'Eight', vn: 'Tam'},
  {id: '9', en: 'Nine', vn: 'Chin'},
  {id: '10', en: 'Ten', vn: 'Muoi'},
];
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {words.map(word => (
          <Word word={word} key={word.en} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
