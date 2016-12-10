import React,{Component} from 'react';
import FilterLink from './FilterLink';

class Footer extends Component {
  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const store = this.context.store;
    const state = store.getState();
    const visibilityFilter = state.visibilityFilter;
    const onClickFilter = (filter) => {
      store.dispatch({
        type: 'SET_VISIABLEFILTER',
        filter,
      })
    }
    return(
      <div>
        <FilterLink
          filter="SHOW_ALL"
          currentFilter = {visibilityFilter}
          onClick = {onClickFilter}
        >
          Show all
        </FilterLink>{' '}
        <FilterLink
          filter="SHOW_COMPLETED"
          currentFilter= {visibilityFilter}
          onClick = {onClickFilter}
        >
          Show completed
        </FilterLink>{' '}
        <FilterLink
          filter="SHOW_ACTIVE"
          currentFilter= {visibilityFilter}
          onClick = {onClickFilter}
        >
          Show active
        </FilterLink>
      </div>
    )
  }
}

Footer.contextTypes = {
  store: React.PropTypes.object
}


export default Footer;
