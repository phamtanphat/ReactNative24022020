import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';
import {connect} from 'react-redux';

class List extends Component {
  onToggleMemorized = id => {
    const newWords = this.state.words.map(item => {
      if (item.id === id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.setState({words: newWords});
  };
  onRemoveWord = id => {
    const newWords = this.state.words.filter(item => item.id !== id);
    this.setState({words: newWords});
  };
  onToggleForm = shouldShowform => {
    this.setState({shouldShowform});
  };
  onAddword = words => {
    this.setState({words, shouldShowform: false});
  };
  onFilterMode = filtermode => {
    this.setState({filtermode});
  };
  render() {
    console.log("render list");
    return (
      <ScrollView style={styles.container}>
        <Form />
        <Filter />
        <Word />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
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
});

export default connect()(List);
