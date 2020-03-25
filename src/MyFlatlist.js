import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

const words = ['One', 'Two', 'Three', 'Four'];
export default class MyFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  render() {
    return (
      <FlatList
        data={words}
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
        keyExtractor={item => item}
        extraData={words}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{width: '100%', height: 1, backgroundColor: 'black'}}
            />
          );
        }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={() => this.setState({isLoading: true})}
          />
        }
      />
    );
  }
}
