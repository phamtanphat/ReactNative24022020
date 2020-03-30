import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.txtEn = '';
    this.txtVn = '';
    this.state = {
      words: [
        {id: '1', en: 'One', vn: 'Mot', isMemorized: true},
        {id: '2', en: 'Two', vn: 'Hai', isMemorized: false},
        {id: '3', en: 'Three', vn: 'Ba', isMemorized: false},
        {id: '4', en: 'Four', vn: 'Bon', isMemorized: false},
        {id: '5', en: 'Five', vn: 'Nam', isMemorized: false},
        {id: '6', en: 'Six', vn: 'Sau', isMemorized: true},
        {id: '7', en: 'Seven', vn: 'Bay', isMemorized: false},
        {id: '8', en: 'Eight', vn: 'Tam', isMemorized: true},
        {id: '9', en: 'Nine', vn: 'Chin', isMemorized: false},
        {id: '10', en: 'Ten', vn: 'Muoi', isMemorized: true},
      ],
      shouldShowform: false,
      filterMode: 'Show_All',
    };
  }
  toggleMemorized = id => {
    const newWords = this.state.words.map(item => {
      if (item.id === id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.setState({words: newWords});
  };
  removeWord = id => {
    const newWords = this.state.words.filter(item => item.id !== id);
    this.setState({words: newWords});
  };
  toggleForm = () => {
    this.setState({shouldShowform: !this.state.shouldShowform});
  };
  addword = () => {
    const newWord = {
      id: this.state.words.length + 1 + '',
      en: this.txtEn,
      vn: this.txtVn,
      isMemorized: false,
    };
    const newWords = Object.assign([], this.state.words);
    newWords.splice(0, 0, newWord);
    this.txtVn = '';
    this.txtEn = '';
    this.setState({words: newWords, shouldShowform: false});
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Form shouldShowform={this.state.shouldShowform} />
        <Filter filterMode={this.state.filterMode} />
        <Word words={this.state.words} filterMode={this.state.filterMode} />
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
