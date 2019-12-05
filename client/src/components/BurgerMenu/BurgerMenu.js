// packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// styles & assets
import "./BurgerMenu.scss";
// import logo from "../../styles/assets/logos/logo.png";

export default class BurgerMenu extends Component {
  render() {
    const burStyle = {
      bmOverlay: {
        background: 'none'
      }
    }

    return (
      <Menu right styles={burStyle}>
        <button className="nav__button">
          <Link to="/catalog">
            <p className="nav__link">Catalog</p>
          </Link>
        </button>
        <button className="nav__button">
          <Link to="/favorites">
            <p className="nav__link">Favorites</p>
          </Link>
        </button>
        <button className="nav__button">
          <Link to="/">
            <p className="nav__link">Creations</p>
          </Link>
        </button>
      </Menu>
    );
  }
}
