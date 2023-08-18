import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import image from "../assets/images/th.jpg"


export const MainLayout = (props) => {
  console.log("pppppppppppp");
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg with-background">
        <div className="container-fluid">
          <Link to="/dashboard" className="brandLogo">
            {/* Display the image here */}
            <img src={image} alt="Brand Logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/men">men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/women">women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">kids</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home-living">home & living</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">beauty</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">studio <sup data-reactid="841">new</sup></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content"></div>
    </div>
  );
};
