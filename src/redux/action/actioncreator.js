import actiontype from './actiontype';

function onRemoveWord(words) {
  return {type: actiontype.ON_REMOVE_WORD, words};
}

function onToggleWord(words) {
  return {type: actiontype.ON_TOGGLE_WORD, words};
}
function onAddWord(words) {
  return {type: actiontype.ON_ADD_WORD, words};
}
function onToggleForm(shouldShowform) {
  return {type: actiontype.ON_TOGGLE_FORM, shouldShowform};
}
function onSetFilterMode(filtermode) {
  return {type: actiontype.ON_SET_FILTER_MODE, filtermode};
}

export default {
  onRemoveWord,
  onToggleWord,
  onAddWord,
  onToggleForm,
  onSetFilterMode,
};
