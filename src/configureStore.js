import rootReducer from './reducers';

import {createStore} from 'redux';
import {saveState, getState} from './localStorage.js';
import {throttle} from 'lodash';



const mockData = getState();


let store = createStore(rootReducer,mockData);


store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000))


export default store;
