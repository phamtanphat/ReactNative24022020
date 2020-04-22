/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
// import Word from './src/Word';
// import Box from './src/Box';
// import List from './src/List';
// import MyFlatlist from './src/MyFlatlist';
// import Form from './src/Form';
// import Filter from './src/Filter';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import RootComponent from './src/RootComponent';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ScreenA from './src/screen/ScreenA';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenB from './src/screen/ScreenB';
import Parent from './src/hooks/Parent';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Provider store={store}>
          <RootComponent />
        </Provider> */}
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName="ScreenA">
            <Stack.Screen name="ScreenA" component={ScreenA} />
            <Stack.Screen name="ScreenB" component={ScreenB} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <Parent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
