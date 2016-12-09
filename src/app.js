import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import rootReducer from './reducers';
import FilterLink from './Components/FilterLink'



let store = createStore(rootReducer);

const getVisibleTodos = (todos, visibilityFilter) => {
  switch(visibilityFilter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => {
        return todo.completed;
      })
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => {
        return !todo.completed;
      })
    default:
      throw new Error('unknow filter');
  }
}

class App extends Component {
  render(){
    const state = store.getState();
    // const todos = state.todos;
    // const visibilityFilter =  state.visibilityFilter;
    let {todos, visibilityFilter} = state;
    console.log(state);
    todos = getVisibleTodos(todos, visibilityFilter);
    const clickFilter = (filter) => {
      store.dispatch({
        type: 'SET_VISIABLEFILTER',
        filter,
      })
    }

    return (
      <div>
        <input type="text" ref="_input"/>
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.refs._input.value
            })
          }}>
          Add
        </button>
        <ul>
          {todos.map((todo) => {
            return(
              <li
                style={{
                  textDecoration: todo.completed ? 'line-through' :'none'
                }}
                onClick={()=> {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  })
                }}
                key = {todo.id}>
                {todo.text}
              </li>
            )
          })}
        </ul>
        <div>
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
            onClick = {clickFilter}>
            Show all
          </FilterLink>{' '}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
            onClick = {clickFilter}>
            Show completed
          </FilterLink>{' '}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
            onClick = {clickFilter}>
            Show active
          </FilterLink>
        </div>
      </div>
    )
  }
}

const render = () => {
  ReactDom.render(
    <App />,
    document.getElementById("root")
  )
}

render();
store.subscribe(render);
