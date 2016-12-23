import {v4} from 'uuid';

export const addTodo = (val) => {
  return {
    id: v4(),
    type: 'ADD_TODO',
    text: val,
  }
}

export const setVisiablefilter = (filter) => {
  return {
    type: 'SET_VISIABLEFILTER',
    filter,
  }
}


export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
