import {combineReducers} from 'redux';
import wordsReducer from './wordsReducer';
import filtermodeReducer from './filtermodeReducer';
import shouldShowformReducer from './shouldShowformReducer';

const reducer = combineReducers({
  words: wordsReducer,
  filtermode: filtermodeReducer,
  shouldShowform: shouldShowformReducer,
});

export default reducer;
