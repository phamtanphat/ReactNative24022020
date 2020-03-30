/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.text === nextState.text) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log('render child');
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={this.increase}
          style={{backgroundColor: 'green', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Increase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.decrease}
          style={{backgroundColor: 'red', padding: 10}}>
          <Text
            style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
            Decrease
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.reset}
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
