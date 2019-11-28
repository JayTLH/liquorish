// packages
import React, { Component } from 'react';

// styles & assets
import './Footer.scss';
import logo from '../../styles/assets/logos/logo.png'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="footer__logo" src={logo} alt="barkeep logo" />
      </div>
    )
  }
}