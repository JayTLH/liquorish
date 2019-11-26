// packages
import React, { Component } from 'react'

// styles & assets
import './LandingPage.scss'
import hero from '../../styles/assets/images/adam-wilson-6UIonphZA5o-unsplash.jpg'

// components
import Navbar from '../../components/Navbar';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Navbar />
        <img className="landing__hero" src={hero} alt="wine glasses laid upside down on a hanger"></img>
      </div>
    )
  }
}