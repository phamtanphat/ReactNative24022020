import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class ScreenA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Màn hinh A',
    };
  }
  updateTitle = text => {
    this.setState({text});
  };
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Text> {this.state.text} </Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ScreenB', {
              updateTitle: this.updateTitle,
            })
          }
          style={{backgroundColor: 'blue'}}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
