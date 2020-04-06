/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';

class Word extends Component {
  removeWord = id => {
    const newWords = this.props.words.filter(item => item.id !== id);
    this.props.dispatch({type: 'ON_REMOVE_WORD', words: newWords});
  };
  toggleWord = id => {
    const newWords = this.props.words.map(item => {
      if (item.id === id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.props.dispatch({type: 'ON_TOGGLE_WORD', words: newWords});
  };
  renderItemFlatlist = item => {
    if (this.props.filtermode === 'Show_Forgot' && !item.isMemorized) {
      return null;
    } else if (this.props.filtermode === 'Show_Memorized' && item.isMemorized) {
      return null;
    }
    return (
      <View style={styles.containerGroupWord} key={item.id}>
        <View style={styles.groupText}>
          <Text style={styles.textEn}>{item.en}</Text>
          <Text style={styles.textVn}>
            {item.isMemorized ? '----' : item.vn}
          </Text>
        </View>
        <View style={styles.groupButton}>
          <TouchableOpacity
            onPress={() => this.toggleWord(item.id)}
            style={styles.buttonMemorized(item.isMemorized)}>
            <Text style={styles.textMemorized}>
              {item.isMemorized ? 'Forgot' : 'Memorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.removeWord(item.id)}
            style={styles.buttonRemove}>
            <Text style={styles.textRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    console.log("render word");
    return (
      <FlatList
        ref={ref => {
          this.flatlist = ref;
        }}
        scrollEnabled={false}
        data={this.props.words}
        renderItem={({item}) => this.renderItemFlatlist(item)}
        keyExtractor={item => item.id}
        extraData={this.props.words}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerGroupWord: {
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'gainsboro',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  groupText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textEn: {
    color: '#27A744',
    fontSize: 20,
  },
  textVn: {
    color: '#DC3545',
    fontSize: 20,
  },
  groupButton: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonMemorized: isMemorized => {
    return {
      backgroundColor: isMemorized ? '#27A744' : '#DC3545',
      padding: 10,
    };
  },
  buttonRemove: {
    backgroundColor: '#E0A800',
    padding: 10,
  },
  textMemorized: {
    color: '#ffffff',
    fontSize: 20,
  },
  textRemove: {
    color: '#ffffff',
    fontSize: 20,
  },
});

const mapStateToProps = function(state) {
  return {words: state.words, filtermode: state.filtermode};
};
export default connect(mapStateToProps)(Word);
