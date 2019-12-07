// packages
import React, { Component } from 'react'
import { motion } from "framer-motion";

// styles and assets
import './TopButton.scss';
import add from '../../styles/assets/icons/icon-add.svg';

export default class DrinkModal extends Component {
  scrollTop = (e) => {
    console.log(e.target)
  }

  render() {
    return (
      <div className="top">
        <motion.button
          className="top__button"
          onClick={this.scrollTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.99 }}
        >
          <img className="top__icon" src={add} alt="up icon" />
        </motion.button>
      </div>
    )
  }
}
