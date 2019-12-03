// packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// styles & assets
import "./BurgerMenu.scss";
import logo from "../../styles/assets/logos/logo.png";

export default class BurgerMenu extends Component {
  render() {
    const burStyle = {
      bmOverlay: {
        background: 'none'
      }
    }

    return (
      <Menu right styles={burStyle}>
        <button className="nav__logo">
          <Link to="/">
            {/* change to profile icon */}
            <img className="nav__logo-img" src={logo} alt="barkeep logo" />
          </Link>
        </button>
        <button className="nav__button">
          <Link to="/catalog">
            <p className="nav__link">CATALOG</p>
          </Link>
        </button>
        <button className="nav__button">
          <Link to="/customize">
            <p className="nav__link">Customize</p>
          </Link>
        </button>
        <button className="nav__button">
          <Link to="/">
            <p className="nav__link">UPLOAD</p>
          </Link>
        </button>
      </Menu>
    );
  }
}
