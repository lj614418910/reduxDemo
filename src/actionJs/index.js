export const addTodo = (val) => {
  return {
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
