// packages
import React, { Component } from "react";
import { motion } from "framer-motion";
import anime from "animejs";

// styles & assets
import "./Hero.scss";
import hero from "../../styles/assets/images/img3.jpg";

// components
import DisplayDrinks from "../DisplayDrinks";

export default class Hero extends Component {
  state = {
    display: "default"
  };

  toggleDisplay = e => {
    this.setState({
      display: e.target.value
    });
  };

  animate = () => {
    anime({
      targets: this.display,
      translateX: { value: 1000 },
      duration: 800,
      easing: 'easeInOutExpo'
    })
  }

  componentDidUpdate() {
    this.animate()
  }

  render() {
    return (
      <div className="hero">
        <img
          className="hero__img"
          src={hero}
          alt="wine glasses laid upside down on a hanger"
        ></img>
        <div className="hero__filter"></div>

        {this.state.display === "default" ? (
          <div className="hero__text">
            <h2 className="hero__msg">Welcome!</h2>
            <h6 className="hero__slogan">
              <span className="hero__slogan--orange">Let's</span> get you
              started on your journey to
              <br />
              become a Cock
              <span className="hero__slogan--orange">Tail</span> Connoisseur
            </h6>
            <h6 className="hero__slogan--middle">
              We offer a wide selection of drinks,
              <br /> totalling over{" "}
              <span className="hero__slogan--orange">350</span>!
            </h6>
            <h6 className="hero__slogan--bottom">Discover our drinks!</h6>
          </div>
        ) : null}

        {this.state.display === "popular" ? (
          <div className="hero__animate" ref={display => (this.display = display)}>
            <DisplayDrinks data={this.props.data} display={this.state.display} />
          </div>
        ) : null}

        {this.state.display === "random" ? (
          <div className="hero__animate" ref={display => (this.display = display)}>
            <DisplayDrinks data={this.props.data} display={this.state.display} ref={display => (this.display = display)} />
          </div>
        ) : null}

        <div className="hero__button-container">
          <motion.button
            className="hero__button"
            value="popular"
            onClick={this.toggleDisplay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
          >
            POPULAR
          </motion.button>
          <motion.button
            className="hero__button"
            value="random"
            onClick={this.toggleDisplay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
          >
            RANDOM
          </motion.button>
        </div>
      </div>
    );
  }
}
