import React from 'react';
import {View, Text} from 'react-native';

const Child = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent : 'space-around'}}>
      <Text>One</Text>
      <Text>Mot</Text>
    </View>
  );
};

export default Child;
