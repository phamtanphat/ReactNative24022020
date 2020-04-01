/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onIncrease = count => {
    this.setState({count: count + 1});
  };
  onDescrease = count => {
    this.setState({count: count - 1});
  };
  onReset = () => {
    this.setState({count: 0});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 40}}>
          Count : {this.state.count}
        </Text>
        <Child
          onDescrease={this.onDescrease}
          onIncrease={this.onIncrease}
          onReset={this.onReset}
          count={this.state.count}
        />
      </View>
    );
  }
}
