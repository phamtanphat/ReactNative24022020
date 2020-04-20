import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class ScreenA extends Component {
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text> Màn hình A </Text>
        <TouchableOpacity style={{backgroundColor: 'blue'}}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
};