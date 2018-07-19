// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = ( dispatch: Function ) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

const Landing = (props: { searchTerm: string, handleSearchTermChange: Function }) => (
  <div className='landing'>
    <h1>Search video</h1>
    <input value={props.searchTerm} onChange={props.handleSearchTermChange} type='text' placeholder='Search...'/>
    <Link to='/search'>or Browse All</Link>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
