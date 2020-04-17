export default function loadingReducer(state = false, action) {
  if (action.type === 'ON_LOADING') {
    return action.isLoading;
  }
  return state;
}
