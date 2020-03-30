import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';

export default class Filter extends Component {
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <Picker
          selectedValue={this.props.filterMode}
          style={styles.pickerStyle}
          onValueChange={itemValue => {
            this.setState({filterMode: itemValue});
          }}>
          <Picker.Item label="Show All" value="Show_All" />
          <Picker.Item label="Show Forgot" value="Show_Forgot" />
          <Picker.Item label="Show Memorized" value="Show_Memorized" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  pickerStyle: {
    height: 50,
  },
});
