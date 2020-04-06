import {createStore, combineReducers} from 'redux';

const defaultWords = [
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
];

function wordsReducer(state = defaultWords, action) {
  return state;
}
function filtermodeReducer(state = 'Show_All', action) {
  return state;
}
function shouldShowformReducer(state = false, action) {
  return state;
}

const reducer = combineReducers({
  words: wordsReducer,
  filtermode: filtermodeReducer,
  shouldShowform: shouldShowformReducer,
});

const store = createStore(reducer);

// (state = defaultStore, action) => {
//     if (action.type === 'ON_TOGGLE_FORM') {
//       return {...state, shouldShowform: action.shouldShowform};
//     }
//     if (action.type === 'ON_ADD_WORD') {
//       return {...state, shouldShowform: false, words: action.words};
//     }
//     if (action.type === 'ON_REMOVE_WORD') {
//       return {...state, words: action.words};
//     }
//     if (action.type === 'ON_TOGGLE_WORD') {
//       return {...state, words: action.words};
//     }
//     if (action.type === 'ON_SET_FILTER_MODE') {
//       return {...state, filtermode: action.filtermode};
//     }
//     return state;
//   }

export default store;
