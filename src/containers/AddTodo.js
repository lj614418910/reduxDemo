import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actionJs/'

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

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (val) => {
      dispatch(addTodo(val))
    }
  }
}

export default connect(null,mapDispatchToProps)(AddTodo);
