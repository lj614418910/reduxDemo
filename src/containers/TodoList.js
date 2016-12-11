import React,{Component} from 'react';
import{connect} from 'react-redux';
import {toggleTodo} from '../actionJs/';

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


// const connect = (mapStateToProps, mapDispatchToProps) => {
//   return (WrapperComponent) => {
//     class Connect extends Component {
//       componentDidMount() {
//         const store = this.context.store;
//         this.unsubscribe = store.subscribe(() => {
//           this.forceUpdate();
//         })
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render (){
//         const store = this.context.store;
//         const stateProps = mapStateToProps(store.getState());
//         const dispatchProps = mapDispatchToProps(store.dispatch);
//         const props = Object.assign({}, stateProps, dispatchProps);
//
//         // return <WrapperComponent {...props} />;
//         return React.createElement(WrapperComponent, props);
//       }
//     }
//     Connect.contextTypes = {
//       store: React.PropTypes.object
//     };
//     return Connect;
//   }
// }

const mapStateToProps = (state) => {
  return {
    todos : getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onClickTodo : (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
