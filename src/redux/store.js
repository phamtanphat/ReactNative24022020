import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/rootReducer';
import {composeWithDevTools} from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 8000,
  hostname: 'localhost', //add your computer's IP
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
