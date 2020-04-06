import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelected: '',
    };
  }
  render() {
    console.log("render filter");
    return (
      <View style={styles.containerPickerStyle}>
        <Picker
          selectedValue={this.props.filtermode}
          style={styles.pickerStyle}
          onValueChange={itemValue => {
            this.props.onFilterMode(itemValue);
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

const mapStateToProps = function(state) {
  return {filtermode: state.filtermode};
};

export default connect(mapStateToProps)(Filter);
