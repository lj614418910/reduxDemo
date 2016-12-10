import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import rootReducer from './reducers';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';



let store = createStore(rootReducer);


class App extends Component {
  render(){
    const state = store.getState();
    console.log(state);
    let {todos, visibilityFilter} = state;
    return (
      <div>
        <AddTodo/>
        <TodoList />
        <Footer />
      </div>
    )
  }
}



// class Provider extends Component{
//   getChildContext() {
//     return {store: this.props.store};
//   }
//   render(){
//       return(
//         this.props.children
//       )
//   }
// }
//
// Provider.childContextTypes = {
//   store : React.PropTypes.object
// };


const render = () => {
  ReactDom.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
}

render();
// store.subscribe(render);
