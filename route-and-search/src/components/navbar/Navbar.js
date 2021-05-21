import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">logo</div>
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addAlbum">Add Album</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
