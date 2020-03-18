import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class ImageView extends Component {
  render() {
    return (
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri:
            'https://techtalk.vn/wp-content/uploads/2018/12/react-native.png',
        }}
      />
    );
  }
}
