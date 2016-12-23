import React,{Component} from 'react';
import{connect} from 'react-redux';
import {toggleTodo} from '../actionJs/';
import {withRouter} from 'react-router'

const getVisibleTodos = (todos, visibilityFilter) => {
  switch(visibilityFilter){
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



const mapStateToProps = (state, ownProps) => {
  return {
    todos : getVisibleTodos(state.todos, ownProps.params.filter||'all')
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onClickTodo : (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
