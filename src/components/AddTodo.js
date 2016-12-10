import React,{Component} from 'react';

class AddTodo extends Component{
  render(){
    return(
      <div>
        <input type="text" ref="_input"/>
        <button
          onClick = {() =>{
            this.props.onClick(this.refs._input.value);
          }}>
          Add
        </button>
      </div>
    )
  }
}


export default AddTodo;
