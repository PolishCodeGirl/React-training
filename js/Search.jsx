import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }

    this.handleSearchOutput = this.handleSearchOutput.bind(this)
  }

  handleSearchOutput (event) {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div className='search'>
        <header>
          <h1>Shows!</h1>
          <input
            value={this.state.searchValue}
            onChange={this.handleSearchOutput}
            type='text'
            placeholder='Search...'/>
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.title} show={show}/>)}
        </div>
      </div>
    )
  }
}

export default Search;
