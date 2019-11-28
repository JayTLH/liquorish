// packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

// styles
import './NavMenu.scss';
import './'

export default class NavMenu extends Component {
  render() {
    return (
      <div className="nav">
        <Menu right>
          <button className="nav__logo">
            <Link to="/">LOGO/home</Link>
          </button>
          <button className="nav__button">
            <Link to="/catalog">CATALOG</Link>
          </button>
          <button className="nav__button">
            <Link to="/">CALCULATOR</Link>
          </button>
          <button className="nav__button">
            <Link to="/">UPLOAD</Link>
          </button>
        </Menu>
      </div>
    )
  }
}