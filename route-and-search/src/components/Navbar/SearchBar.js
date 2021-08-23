import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
