import {v4} from 'uuid';

export const addTodo = (val) => {
  return {
    id: v4(),
    type: 'ADD_TODO',
    text: val,
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const receiveTodos = (response, filter) => ({
  type: 'RECEIVE_TODO',
  response,
})
