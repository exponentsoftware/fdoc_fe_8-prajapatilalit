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
    this.setState({ searchText: "" });
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
          <button
            type="submit"
            onClick={() => this.props.search(this.state.searchText)}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="album_item">
          {this.props.searchItem === "" ? (
            ""
          ) : (
            <div className="album">
              <div className="album_info">
                <img
                  src={this.props.searchItem.albumCover}
                  alt="Album-cover"
                  className="album_img"
                />
                <p className="album-title">{this.props.searchItem.album}</p>
                <span className="album_artist">
                  {this.props.searchItem.artist}
                </span>
                <button
                  className="btn mt"
                  onClick={() =>
                    this.props.searchItem.removeItem(this.props.searchItem.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
