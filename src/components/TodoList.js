import React,{Component} from 'react';

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


class TodoList extends Component {
  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const store = this.context.store;
    const state = store.getState();
    let {todos, visibilityFilter} = state;
    todos = getVisibleTodos(todos, visibilityFilter);
    const onClickTodo = (id) => {
      store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
    return(
      <ul>
        {todos.map((todo) => {
          return(
            <li
              style={{
                textDecoration: todo.completed ? 'line-through' :'none'
              }}
              key = {todo.id}
              onClick={()=> {
                onClickTodo(todo.id)
              }}>
              {todo.text}
            </li>
          )
        })}
      </ul>
    )
  }
}
TodoList.contextTypes = {
  store: React.PropTypes.object
}

export default TodoList;
