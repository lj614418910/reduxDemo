import rootReducer from './reducers';

import {createStore} from 'redux';
import {saveState, getState} from './localStorage.js';
import {throttle} from 'lodash';


const addLoggerToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.log('-----------------------------------');
    console.log('Current state:', store.getState());
    console.log('Action:',action);
    const ret = rawDispatch(action);
    console.log('next state:', store.getState());
    return ret;
  }
}


const configureStore = () => {
  // const mockData = getState();


  let store = createStore(rootReducer/*,mockData*/);


  store.dispatch = addLoggerToDispatch(store);
  // store.subscribe(throttle(() => {
  //   saveState(store.getState());
  // }, 1000))

  return store;
}

export default configureStore;
