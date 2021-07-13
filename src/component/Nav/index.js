import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Nav = ({ currentPage, animateIng, changeCurrnetPage }) => {
  return (
    <nav className={currentPage === 0 ? "color" : ""}>
      <ul>
        <li className="logo">logo</li>
        <li>
          {!animateIng ? (
            <Link to="about" onClick={() => changeCurrnetPage(0)}>
              About
            </Link>
          ) : (
            "About"
          )}
        </li>
        <li>
          {!animateIng ? (
            <Link to="loadmap" onClick={() => changeCurrnetPage(1)}>
              Loadmap
            </Link>
          ) : (
            "Loadmap"
          )}
        </li>
        <li>
          {!animateIng ? (
            <Link to="trending" onClick={() => changeCurrnetPage(2)}>
              What's Trending
            </Link>
          ) : (
            "What's Trending"
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
