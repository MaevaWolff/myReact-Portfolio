import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="header__left">
          <p className="header__logo">
            <Link to="/">mw.</Link>
          </p>
        </section>
        <section className="header__right">
          <ul className="header__nav">
            <li>
              <Link to="/Works">works</Link>
            </li>
            <li>
              <Link to="/About">about</Link>
            </li>
          </ul>
        </section>
      </header>
    );
  }
}

export default Header;
