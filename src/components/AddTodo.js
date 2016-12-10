import React,{Component} from 'react';

class AddTodo extends Component{
  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render(){
    const store = this.context.store;
    const onClick = (val) => {
      store.dispatch({
        type: 'ADD_TODO',
        text: val
      })
    }
    return(
      <div>
        <input type="text" ref="_input"/>
        <button
          onClick = {() =>{
            onClick(this.refs._input.value);
          }}>
          Add
        </button>
      </div>
    )
  }
}

AddTodo.contextTypes = {
  store: React.PropTypes.object
}


export default AddTodo;
