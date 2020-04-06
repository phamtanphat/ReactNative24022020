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
import { act } from 'react-test-renderer';

const defaultStore = {
  words: [
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
  ],
  shouldShowform: false,
  filtermode: 'Show_All',
};

const store = createStore((state = defaultStore, action) => {
  if (action.type === 'ON_TOGGLE_FORM') {
    return {...state, shouldShowform: action.shouldShowform};
  }
  if (action.type === 'ON_ADD_WORD') {
    return {...state, shouldShowform: false, words: action.words};
  }
  if (action.type === 'ON_REMOVE_WORD') {
    return {...state, words: action.words};
  }
  if (action.type === 'ON_TOGGLE_WORD') {
    return {...state, words: action.words};
  }
  if (action.type === 'ON_SET_FILTER_MODE') {
    return {...state, filtermode: action.filtermode};
  }
  return state;
});

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
