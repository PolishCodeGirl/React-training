// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

const Landing = () => (
  <div className='landing'>
    <h1>Search video</h1>
    <input type='text' placeholder='Search...'/>
    <Link to='/search'>or Browse All</Link>
  </div>
)

export default connect(mapStateToProps)(Landing);
