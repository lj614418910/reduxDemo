import React,{Component} from 'react';
import FilterLink from './FilterLink';

class Footer extends Component {
  render() {
    const {onClickFilter} = this.props;
    return(
      <div>
        <FilterLink
          filter="SHOW_ALL"
          currentFilter = {this.props.currentFilter}
          onClick = {onClickFilter}
        >
          Show all
        </FilterLink>{' '}
        <FilterLink
          filter="SHOW_COMPLETED"
          currentFilter={this.props.currentFilter}
          onClick = {onClickFilter}
        >
          Show completed
        </FilterLink>{' '}
        <FilterLink
          filter="SHOW_ACTIVE"
          currentFilter={this.props.currentFilter}
          onClick = {onClickFilter}
        >
          Show active
        </FilterLink>
      </div>
    )
  }
}


export default Footer;
