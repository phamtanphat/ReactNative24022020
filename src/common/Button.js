import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  checkRenderTextTitle() {
    if (this.props.text) {
      return this.props.text;
    } else {
      return '';
    }
  }
  render() {
    return (
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          {this.checkRenderTextTitle()}
        </Text>
      </TouchableOpacity>
    );
  }
}
