/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Child from './Child';

const Parent = () => {
  const [arrayColor, setarrayColor] = useState([
    'red',
    'green',
    'blue',
    'orange',
    'black',
  ]);
  const [color, setColor] = useState('');

  function randomColor() {
    const index = Math.floor(Math.random() * 5);
    setColor(arrayColor[index]);
  }
  console.log('Parent Render');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={randomColor}
        style={{backgroundColor: 'gray', padding: 10, marginBottom: 10}}>
        <Text style={{color: 'white', fontSize: 20}}>Random color</Text>
      </TouchableOpacity>
      <View style={{backgroundColor: color, width: 300, height: 300}} />
    </View>
  );
};

export default Parent;
