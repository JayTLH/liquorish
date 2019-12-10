// packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// styles & assets
import "./BurgerMenu.scss";

export default class BurgerMenu extends Component {
  render() {
    const burStyle = {
      bmOverlay: {
        background: 'none',
      },
      bmMenu: {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        width: '650px'
      },
      bmItemList: {
        padding: '150px 0 0 70px'
      }
    }

    return (
      <Menu right styles={burStyle}>
        <button className="nav__button">
          <Link to="/">
            <p className="nav__link">Home</p>
          </Link>
        </button>
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
          <Link to="/creationspage">
            <p className="nav__link">Creations</p>
          </Link>
        </button>
      </Menu>
    );
  }
}
