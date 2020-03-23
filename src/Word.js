/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Word extends Component {
  render() {
    // cach 1 lay gia tri tu 1 object
    // const en = this.props.word.en;
    // const vn = this.props.word.vn;
    // cach 2 dung destructuring
    const {en, vn, isMemorized} = this.props.word;
    return (
      <View style={styles.container}>
        <View style={styles.groupText}>
          <Text style={styles.textEn}>{en}</Text>
          <Text style={styles.textVn}>{isMemorized ? '----' : vn}</Text>
        </View>
        <View style={styles.groupButton}>
          <TouchableOpacity style={styles.buttonMemorized(isMemorized)}>
            <Text style={styles.textMemorized}>
              {isMemorized ? 'Forgot' : 'Memorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRemove}>
            <Text style={styles.textRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'gainsboro',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  groupText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textEn: {
    color: '#27A744',
    fontSize: 20,
  },
  textVn: {
    color: '#DC3545',
    fontSize: 20,
  },
  groupButton: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonMemorized: isMemorized => {
    return {
      backgroundColor: isMemorized ? '#27A744' : '#DC3545',
      padding: 10,
    };
  },
  buttonRemove: {
    backgroundColor: '#E0A800',
    padding: 10,
  },
  textMemorized: {
    color: '#ffffff',
    fontSize: 20,
  },
  textRemove: {
    color: '#ffffff',
    fontSize: 20,
  },
});
