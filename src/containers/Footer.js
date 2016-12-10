import React,{Component} from 'react';
import FilterLink from '../components/FilterLink';
import {connect} from 'react-redux';
import {setVisiablefilter} from '../actionJs/';

class Footer extends Component {
  render() {
    return(
      <div>
        <FilterLink
          filter="SHOW_ALL"
          currentFilter = {this.props.visibilityFilter}
          onClick = {this.props.onClickFilter}
        >
          Show all
        </FilterLink>{' '}
        <FilterLink
          filter="SHOW_COMPLETED"
          currentFilter= {this.props.visibilityFilter}
          onClick = {this.props.onClickFilter}
        >
          Show completed
        </FilterLink>{' '}
        <FilterLink
          filter="SHOW_ACTIVE"
          currentFilter= {this.props.visibilityFilter}
          onClick = {this.props.onClickFilter}
        >
          Show active
        </FilterLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickFilter:(filter) => {
      dispatch(setVisiablefilter(filter))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Footer);
