import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AddAlbum from "./components/Albums/AddAlbum";
import Albums from "./components/Albums/Albums";
import albumList from "./components/Albums/AlbumData";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    albums: albumList,
    searchList: "",
  };

  addAlbum = (albumItem) => {
    const newAlbumList = [albumItem, ...this.state.albums];
    return this.setState({ albums: newAlbumList });
  };

  removeAlbum = (id) => {
    const removeArr = [...this.state.albums].filter((albumItem) => {
      return albumItem.id !== id;
    });
    this.setState({ albums: removeArr });
  };

  searchAlbum = (searchText) => {
    const searchAlbum = [...this.state.albums].find((albumListItem) =>
      albumListItem.album === searchText || albumListItem.artist === searchText
        ? albumListItem
        : ""
    );
    this.setState({ searchList: searchAlbum });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar
            onSearch={this.searchAlbum}
            searchList={this.state.searchList}
            removeAlbum={this.removeAlbum}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/addalbum">
              <div className="container">
                <div className="header">
                  <AddAlbum onAdd={this.addAlbum} albums={this.state.albums} />
                </div>
              </div>
            </Route>
            <Route exact path="/albums">
              <div className="container">
                <div className="albums">
                  <div className="albums-box">
                    <h1 className="albums-heading">Albums</h1>
                    <div className="album_item">
                      <Albums
                        albums={this.state.albums}
                        removeAlbum={this.removeAlbum}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
