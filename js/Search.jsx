// @flow
import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

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
        <Header showSearch searchValue={this.state.searchValue} handleSearchOutput={this.handleSearchOutput}/>
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
