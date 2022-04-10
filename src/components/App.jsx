import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { FetchPhoto } from './FetchPhoto/FetchPhoto';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <FetchPhoto searchQuery={searchQuery} />
      </>
    );
  }
}
