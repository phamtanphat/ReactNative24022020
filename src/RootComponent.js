/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import List from './List';
import {connect} from 'react-redux';
import actioncreator from './redux/action/actioncreator';

class RootComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
        {this.props.isLoading ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: 'transparent',
            }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', position: 'absolute'},
});

const mapStateToProps = function(state) {
  return {isLoading: state.isLoading};
};
export default connect(
  mapStateToProps,
  actioncreator,
)(RootComponent);
