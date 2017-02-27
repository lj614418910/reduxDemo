import {combineReducers} from 'redux';

const byId = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      let nextState = Object.assign({}, state);
      nextState[action.id] = {
        id: action.id,
        text: action.text,
        completed: false
      }
      return nextState;
    case 'TOGGLE_TODO':
      state[action.id] = Object.assign({},state[action.id],{
        completed: !todo.completed
      })
      return state;
    case 'RECEIVE_TODO':
      nextState = {};
      action.response.forEach(() => {
        nextState[todo.id] = todo;
      })
      return nextState;
    default :
      return state;
  }
}

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default :
      return state;
  }
}

const todos = combineReducers({
  byId,
  allIds
})

// const todos = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       return [...state, {
//         id: action.id,
//         text: action.text,
//         completed: false
//       }]
//      case 'TOGGLE_TODO':
//       return state.map((todo) => {
//         if(todo.id == action.id){
//           return Object.assign({},todo,{
//             completed : !todo.completed
//           })
//         }
//         return todo;
//       })
//     default :
//       return state;
//   }
// }

export default todos;
