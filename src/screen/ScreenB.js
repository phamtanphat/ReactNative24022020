import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class ScreenB extends Component {
  componentWillUnmount = () => {
    console.log('componentWillUnmount B');
  };
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text> Màn hình B </Text>
        <Text>
          Giá trị nhận được {this.props.route.params?.text ?? 'value'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.route?.params.updateTitle('Cập nhật màn hình A');
            this.props.navigation.pop();
          }}
          style={{backgroundColor: 'red'}}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
