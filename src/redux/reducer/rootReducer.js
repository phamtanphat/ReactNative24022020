import {combineReducers} from 'redux';
import wordsReducer from './wordsReducer';
import filtermodeReducer from './filtermodeReducer';
import shouldShowformReducer from './shouldShowformReducer';
import loadingReducer from './loadingReducer';

const reducer = combineReducers({
  words: wordsReducer,
  filtermode: filtermodeReducer,
  shouldShowform: shouldShowformReducer,
  isLoading: loadingReducer,
});

export default reducer;
