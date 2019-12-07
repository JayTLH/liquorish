// packages
import React, { Component } from 'react'
import ReactModal from 'react-modal';
import { motion } from "framer-motion";

// styles and assets
import './CreationsModal.scss';
import add from '../../styles/assets/icons/icon-add.svg';

export default class DrinkModal extends Component {
  state = {
    displayModal: false,
    data: null
  }

  openModal = () => {
    this.setState({
      displayModal: true
    })
  }

  closeModal = () => {
    this.setState({
      displayModal: false
    })
  }

  componentDidMount() {

  }

  render() {
    // if (this.state.data) {
    return (
      <div className="modal">
        <motion.button
          className="modal__add"
          onClick={this.openModal}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.99 }}
        >
          <img className="modal__icon-add" src={add} alt="add icon" />
        </motion.button>

        <ReactModal ariaHideApp={false} isOpen={this.state.displayModal} onRequestClose={this.closeModal} className="modal__body" overlayClassName="modal__overlay">
          <h1>Create a New Drink</h1>
          <form className="modal__form">
          </form>
        </ReactModal>
      </div>
    )
  }
}
