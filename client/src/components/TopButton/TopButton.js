// packages
import React, { Component } from 'react'
import { motion } from "framer-motion";

// styles and assets
import './TopButton.scss';
import up from '../../styles/assets/icons/icon-up.png';

export default class DrinkModal extends Component {
  scrollTop = (e) => {
    document.documentElement.scrollTop = 0;
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
          <img className="top__icon" src={up} alt="up icon" />
        </motion.button>
      </div>
    )
  }
}
