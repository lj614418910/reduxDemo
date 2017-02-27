import {combineReducers} from 'redux';
import todos from './todos.js';



export default combineReducers({
  todos: todos
})

export const getVisibleTodos = (state,filter) => {
  const todos = state.todos.allIds.map((id) => state.todos.byId[id]);
  switch(filter){
    case 'all':
      return todos;
    case 'completed':
      return todos.filter((todo) => {
        return todo.completed;
      })
    case 'active':
      return todos.filter((todo) => {
        return !todo.completed;
      })
    default:
      throw new Error('unknow filter');
  }
}
