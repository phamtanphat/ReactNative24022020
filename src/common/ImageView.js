import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class ImageView extends Component {
  render() {
    return (
      <Image
        style={{width : 300 , height : 300}}
        resizeMode="contain"
        source={require('../assets/hinh1.jpeg')}
      />
    );
  }
}
