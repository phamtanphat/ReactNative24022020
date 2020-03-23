/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Word from './src/Word';
import Box from './src/Box';


const words = [
  {id: '1', en: 'One', vn: 'Mot', isMemorized: true},
  {id: '2', en: 'Two', vn: 'Hai', isMemorized: false},
  {id: '3', en: 'Three', vn: 'Ba', isMemorized: false},
  {id: '4', en: 'Four', vn: 'Bon', isMemorized: false},
  {id: '5', en: 'Five', vn: 'Nam', isMemorized: false},
  {id: '6', en: 'Six', vn: 'Sau', isMemorized: true},
  {id: '7', en: 'Seven', vn: 'Bay', isMemorized: false},
  {id: '8', en: 'Eight', vn: 'Tam', isMemorized: true},
  {id: '9', en: 'Nine', vn: 'Chin', isMemorized: false},
  {id: '10', en: 'Ten', vn: 'Muoi', isMemorized: true},
];
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {words.map(word => (
            <Word word={word} key={word.en} />
          ))}
        </ScrollView> */}
        <Box />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
