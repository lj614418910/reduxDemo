// import {createStore} from 'redux';

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE':
            return  state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
    let state;
    let list = [];
    const getState = () => {
        return state;
    }
    const dispatch = (action) =>{
        state = reducer(state, action);
        list.forEach((fn) => {
            fn();
        })
    }
    const subscribe = (fn) => {
        list.push(fn);
        return () => {
            list = list.filter(cd => cd != fn)
        }
    }
    return {
        getState,
        subscribe,
        dispatch
    }
}

const store = createStore(counter);
store.dispatch({
    type:'INIT',
})



const render = () => {
    document.getElementsByTagName('body')[0].innerHTML = `<h1> ${store.getState()} </h1>`;
}

store.subscribe(render);

const unsubsribe = store.subscribe(render);

render();


document.addEventListener('click', () => {
    console.log(1);
    store.dispatch({
        type:'INCREASE',
    })
    unsubsribe();
})

