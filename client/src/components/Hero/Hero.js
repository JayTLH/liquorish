// packages
import React, { Component } from 'react';

// styles & assets
import './Hero.scss'
import discover from '../../styles/assets/logos/discover-bl.png';
import hero from '../../styles/assets/images/img3.jpg';

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
            <h2 className="hero__msg">Welcome</h2>
            <h6 className="hero__slogan"><span className="hero__slogan--orange">Let's</span> get you started on your journey to<br />become a Cock<span className="hero__slogan--orange">Tail</span> Connoisseur</h6>
          </div>
          : null}

        {this.state.display === "popular" ?
          <div className="hero__text">
            <h2 className="hero__msg">Popular</h2>
            <h6 className="hero__slogan">Let's get you started on your journey to<br />become a CockTail Connoisseur</h6>
          </div>
          : null}

        {this.state.display === "random" ?
          <div className="hero__text">
            <h2 className="hero__msg">Random</h2>
            <h6 className="hero__slogan">Let's get you started on your journey to<br />become a CockTail Connoisseur</h6>
          </div>
          : null}

        <div className="hero__button-container">
          <button className="hero__button" value="popular" onClick={this.toggleDisplay}>POPULAR</button>
          <button className="hero__button" value="random" onClick={this.toggleDisplay}>RANDOM</button>
        </div>
      </div>
    )
  }
}