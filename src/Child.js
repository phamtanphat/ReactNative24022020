/* eslint-disable react-native/no-inline-styles */
import React, {Component, PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    console.log('render child');
    const {onIncrease, count, onReset, onDescrease} = this.props;
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => onIncrease(count)}
          style={{backgroundColor: 'green', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Increase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDescrease(count)}
          style={{backgroundColor: 'red', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Decrease
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onReset()}
          style={{backgroundColor: 'slategray', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
