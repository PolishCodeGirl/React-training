// @flow
import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, searchValue?: string, handleSearchOutput?: Function }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        value={props.searchValue}
        onChange={props.handleSearchOutput}
        type='text'
        placeholder='Search...'/>
    )
  } else {
    utilSpace = (
      <h2>
        <Link to={'/search'}>BACK</Link>
      </h2>
    )
  }

  return (
    <header>
      <h1>
        <Link to={'/'}>svideo</Link>
      </h1>
      {utilSpace}
    </header>)
}

Header.defaultProps = {
  showSearch: false,
  searchValue: '',
  handleSearchOutput: function noop() {},
}

export default Header;
