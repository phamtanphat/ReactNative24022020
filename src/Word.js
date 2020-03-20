import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Word extends Component {
  render() {
    // cach 1 lay gia tri tu 1 object
    // const en = this.props.word.en;
    // const vn = this.props.word.vn;
    // cach 2 dung destructuring
    const {en, vn} = this.props.word;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text> {en} </Text>
        <Text> {vn} </Text>
      </View>
    );
  }
}
