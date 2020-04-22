import React from 'react';
import {View, Text} from 'react-native';

const Child = props => {
  const {en, vn} = props;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text>{en}</Text>
      <Text>{vn}</Text>
    </View>
  );
};

export default Child;
