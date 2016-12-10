import React,{Component} from 'react';

class TodoList extends Component {
  render() {
    return(
      <ul>
        {this.props.todos.map((todo) => {
          return(
            <li
              style={{
                textDecoration: todo.completed ? 'line-through' :'none'
              }}
              key = {todo.id}
              onClick={()=> {
                this.props.onClickTodo(todo.id)
              }}>
              {todo.text}
            </li>
          )
        })}
      </ul>
    )
  }
}


export default TodoList;
