/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Child from './Child';

const Parent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Child />
    </View>
  );
};

export default Parent;
