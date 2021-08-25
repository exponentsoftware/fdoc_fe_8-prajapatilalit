import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
  };

  inputSearchHandle = (e) => {
    this.setState({ searchText: e.target.value });
  };

  onInputSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onInputSubmit}>
          <input
            type="text"
            placeholder="Search album by artist and album title ..."
            name="search"
            onChange={this.inputSearchHandle}
            value={this.state.searchText}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
