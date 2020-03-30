/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.txtEn = '';
    this.txtVn = '';
  }
  renderForm = () => {
    if (this.props.shouldShowform) {
      return (
        <View>
          <TextInput
            style={styles.textStyleEn}
            placeholder="English"
            onChangeText={text => (this.txtEn = text)}
          />
          <TextInput
            style={styles.textStyleVn}
            placeholder="Vietnamese"
            onChangeText={text => (this.txtVn = text)}
          />
          <View style={styles.containerButtonForm}>
            <TouchableOpacity
              onPress={this.addword}
              style={styles.backgroudAddWord}>
              <Text style={styles.textTouchableAddWord}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggleForm()}
              style={styles.backgroudCancel}>
              <Text style={styles.textTouchableCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.toggleForm()}
          style={styles.backgroudPlus}>
          <Text style={styles.textPlus}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="height">
        {this.renderForm()}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  containerButtonForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  backgroudAddWord: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
  },
  textTouchableAddWord: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroudCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
  },
  textTouchableCancel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroudPlus: {
    marginHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#28a745',
    alignItems: 'center',
    borderRadius: 5,
  },
  textPlus: {
    color: 'white',
    fontSize: 20,
  },
  backgroundHeader: {
    marginTop: 10,
  },
  textStyleEn: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  textStyleVn: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
