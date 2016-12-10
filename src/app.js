import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import rootReducer from './reducers';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';



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
    return (
      <div>
        <AddTodo
          onClick={(val) => {
            store.dispatch({
              type: 'ADD_TODO',
              text: val
            })
          }}
        />
        <TodoList
          todos={todos}
          onClickTodo={(id) =>{
            store.dispatch({
              type:'TOGGLE_TODO',
              id,
            })
          }}
        />
        <Footer
          currentFilter = {visibilityFilter}
          onClickFilter = {(filter) => {
            store.dispatch({
              type: 'SET_VISIABLEFILTER',
              filter,
            })
          }}
        />
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
