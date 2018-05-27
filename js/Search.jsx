import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className='search'>
    {preload.shows.map(show => <h3 key={show.title}>{show.title}</h3>)}
  </div>
)

export default Search;
