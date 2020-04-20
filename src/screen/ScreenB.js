import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class ScreenB extends Component {
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text> Màn hình B </Text>
        <TouchableOpacity style={{backgroundColor: 'red'}}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}