import {createStore} from 'redux';
import reducer from './reducer/rootReducer';
import {composeWithDevTools} from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 8000,
  hostname: 'localhost', //add your computer's IP
});
const store = createStore(reducer, composeEnhancers());

export default store;
