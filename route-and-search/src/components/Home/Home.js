import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <h1 className="albums-heading">Welcome to Music Albums</h1>
            {this.props.searchList === "" ? (
              ""
            ) : (
              <div className="album">
                <div className="album_info">
                  <img
                    src={this.props.searchList.albumCover}
                    alt="Album-cover"
                    className="album_img"
                  />
                  <p className="album-title">{this.props.searchList.album}</p>
                  <span className="album_artist">
                    {this.props.searchList.artist}
                  </span>
                  <button
                    className="btn mt"
                    onClick={() =>
                      this.props.searchList.onRemove(this.props.searchList.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
