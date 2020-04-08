export default function filtermodeReducer(state = 'Show_All', action) {
  if (action.type === 'ON_SET_FILTER_MODE') {
    return action.filtermode;
  }
  return state;
}
