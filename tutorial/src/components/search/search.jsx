import React, { Component } from 'react';

class Search extends Component {
  render () {
    return (
      <div className="mb-3">
        <label>
          Search:
          <input
            className="ml-2"
            type="search"
            autoComplete="off"
          />
        </label>
      </div>
    );
  }
}

export default Search;
