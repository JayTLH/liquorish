// packages
import React, { Component } from 'react';
import { motion } from 'framer-motion';

// styles & assets
import './Hero.scss';
import hero from '../../styles/assets/images/img3.jpg';

// components
import DisplayDrinks from '../DisplayDrinks';

// const drinks = [];

export default class Hero extends Component {
  state = {
    display: "default"
  };

  // getAllDrinks = () => {
  //   this.props.data.forEach(index => {
  //     drinks.push({ name: index.strDrink })
  //   })
  //   return drinks
  // }

  toggleDisplay = (e) => {
    this.setState({
      display: e.target.value
    })
  }

  render() {
    return (
      <div className="hero">
        <img className="hero__img" src={hero} alt="wine glasses laid upside down on a hanger"></img>
        <div className="hero__filter"></div>

        {this.state.display === "default" ?
          <div className="hero__text">
            <h2 className="hero__msg">Welcome!</h2>
            <h6 className="hero__slogan"><span className="hero__slogan--orange">Let's</span> get you started on your journey to<br />become a Cock<span className="hero__slogan--orange">Tail</span> Connoisseur</h6>
            <h6 className="hero__slogan">Discover our drinks!</h6>
          </div>
          : null}

        {this.state.display === "popular" ?
          <DisplayDrinks data={this.props.data} display={this.state.display} />
          : null}

        {this.state.display === "random" ?
          <DisplayDrinks data={this.props.data} display={this.state.display} />
          : null}

        <div className="hero__button-container">
          <motion.button className="hero__button" value="popular" onClick={this.toggleDisplay} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }}>POPULAR</motion.button>
          <motion.button className="hero__button" value="random" onClick={this.toggleDisplay} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }}>RANDOM</motion.button>
        </div>
      </div>
    )
  }
}