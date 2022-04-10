import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  status = {
    idle: 'idle',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return <Searchbar onSubmit={this.handleFormSubmit} />;
  }
}
