// @flow
import React, { Component } from 'react';
import ShowCard from './ShowCard';

class Search extends Component {
  state = { searchValue: '' }

  props: {
    shows: Array<Show>
  }

  handleSearchOutput = (event: SyntheticKeyboardEvent & { target: HTMLInputElement } )=> {
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
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchValue.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.title} show={show}/>)}
        </div>
      </div>
    )
  }
}

export default Search;
