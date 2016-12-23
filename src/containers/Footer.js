import React,{Component} from 'react';
import FilterLink from '../components/FilterLink';
import {connect} from 'react-redux';
import {setVisiablefilter} from '../actionJs/';

class Footer extends Component {
  render() {
    return(
      <div>
        <FilterLink
          filter="all"
        >
          Show all
        </FilterLink>{' '}
        <FilterLink
          filter="completed"
        >
          Show completed
        </FilterLink>{' '}
        <FilterLink
          filter="active"
        >
          Show active
        </FilterLink>
      </div>
    )
  }
}


export default Footer;
