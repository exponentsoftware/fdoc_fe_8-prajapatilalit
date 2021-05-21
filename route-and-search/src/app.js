import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import AddAlbum from "./components/albums/AddAlbum";
import Albums from "./components/albums/Albums";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addAlbum" component={AddAlbum} />
          <Route exact path="/albums" component={Albums} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
