import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcPZDK8pLbgCwKEZvOSvBnn-VmFjYtCfoIkL57XvsTuX76g0_1YBZ4XjRJ3bGl-e1ZZo&usqp=CAU"
              alt="logo"
            />
            <span className="sp">Music-Gallery</span>
          </Link>
          <div class="search-container">
            <form>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="nav-item">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/addAlbum">
                <li>AddAlbum</li>
              </Link>
              <Link to="/albums">
                <li>Albums</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
