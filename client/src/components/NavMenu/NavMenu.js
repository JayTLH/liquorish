// packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

// styles & assets
import './NavMenu.scss';
import logo from '../../styles/assets/logos/logo.png';
import logobl from '../../styles/assets/logos/logo-bl.png';

export default class NavMenu extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/"><img className="nav__logo-left" src={logobl} alt="barkeep logo" /></Link>
        <Menu right>
          <button className="nav__logo">
            <Link to="/"><img className="nav__logo-img" src={logo} alt="barkeep logo"/></Link>
          </button>
          <button className="nav__button">
            <Link to="/catalog"><p className="nav__link">CATALOG</p></Link>
          </button>
          <button className="nav__button">
            <Link to="/"><p className="nav__link">CALCULATOR</p></Link>
          </button>
          <button className="nav__button">
            <Link to="/"><p className="nav__link">UPLOAD</p></Link>
          </button>
        </Menu>
      </div>
    )
  }
}