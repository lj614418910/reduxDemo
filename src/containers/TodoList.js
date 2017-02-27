import React,{Component} from 'react';
import{connect} from 'react-redux';
import {toggleTodo, receiveTodos} from '../actionJs/';
import {withRouter} from 'react-router';
import {getVisibleTodos} from '../reducers/';
import {fetchTodos} from '../api/';


class TodoList extends Component {
  completedDidMount() {
    fetchTodos(this.props.filter).then((response) => {
      this.props.onReceiveTodos(response, this.props.filter);
    })
  }
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
  const filter = ownProps.params.filter||'all';
  return {
    todos : getVisibleTodos(state, filter),
    filter,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onClickTodo : (id) => {
      dispatch(toggleTodo(id))
    },
    onReceiveTodos: (response, filter) => {
      dispatch(receiveTodos(response, filter))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
