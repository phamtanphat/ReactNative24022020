import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          Button
        </Text>
      </TouchableOpacity>
    );
  }
}
