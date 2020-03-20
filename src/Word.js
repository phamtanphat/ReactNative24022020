import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Word extends Component {
  render() {
    // cach 1 lay gia tri tu 1 object
    // const en = this.props.word.en;
    // const vn = this.props.word.vn;
    // cach 2 dung destructuring
    const {en, vn} = this.props.word;
    return (
      <View style={styles.container}>
        <Text style={{color: '#27A744' , fontSize : 20 }}> {en} </Text>
        <Text style={{color: '#DC3545' , fontSize : 20 }}> {vn} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
