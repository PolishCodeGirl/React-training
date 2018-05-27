import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
  <div className='search'>
    {preload.shows.map(show => <ShowCard key={show.title} show={show}/>)}
  </div>
)

export default Search;
