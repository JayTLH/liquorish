// packages
import React, { Component } from 'react'

// styles & assets
import './Hero.scss'
import hero from '../../styles/assets/images/hero-full.jpg'
import logo from '../../styles/assets/logos/logo.png'
import discover from '../../styles/assets/logos/discover.png'

// components
import NavMenu from '../NavMenu'


export default class Hero extends Component {
  render() {
    return (
      <div className="hero">

        <NavMenu />

        <img className="hero__img" src={hero} alt="wine glasses laid upside down on a hanger"></img>
        <div className="hero__container">
          <img className="hero__logo" src={logo} alt="a"></img>
          {/* search feature */}
          <input type="text"></input>
          <img className="hero__discover" src={discover} alt="a"></img>
        </div>
      </div>
    )
  }
}