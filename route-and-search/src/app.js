import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AddAlbum from "./components/Albums/AddAlbum";
import Albums from "./components/Albums/Albums";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addalbum" component={AddAlbum} />
          <Route exact path="/albums" component={Albums} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
