/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
export default class Button extends Component {
  checkRenderTextTitle() {
    return this.props.text ? this.props.text : '';
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 5,
          ...this.props.styleBox,
        }}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          {this.checkRenderTextTitle()}
        </Text>
      </TouchableOpacity>
    );
  }
}
