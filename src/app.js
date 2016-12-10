import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import rootReducer from './reducers';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';



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
class Provider extends Component{
  getChildContext() {
    return {store: this.props.store};
  }
  render(){
      return(
        this.props.children
      )
  }
}

Provider.childContextTypes = {
  store : React.PropTypes.object
};


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
