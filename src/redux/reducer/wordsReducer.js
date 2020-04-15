const defaultWords = [];

export default function wordsReducer(state = defaultWords, action) {
  if (action.type === 'ON_ADD_WORD') {
    return action.words;
  }
  if (action.type === 'ON_REMOVE_WORD') {
    return action.words;
  }
  if (action.type === 'ON_TOGGLE_WORD') {
    return action.words;
  }
  if (action.type === 'FETCH_DATA_WORDS') {
    return action.words;
  }
  return state;
}
