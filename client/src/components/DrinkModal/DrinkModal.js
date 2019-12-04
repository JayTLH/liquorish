// packages
import React, { Component } from 'react'
import ReactModal from 'react-modal';
import { motion } from "framer-motion";

// styles and assets
import './DrinkModal.scss';
import list from '../../styles/assets/icons/icon-list.png';

export default class DrinkModal extends Component {
  state = {
    displayModal: false,
    data: null,
    total: null,
    inp0: null,
    inp1: null,
    inp2: null,
    inp3: null,
    inp4: null,
    inp5: null,
    inp6: null,
    inp7: null,
    inp8: null,
    inp9: null,
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

  calcTotal = () => {
    let priceTotal = 0
    this.props.data.forEach(index => {
      priceTotal += Number(index.price)
    })
    priceTotal = Math.floor(priceTotal * 100) / 100
    return priceTotal
  }

  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getTotal = (e) => {
    e.preventDefault()
    let newTotal = 0
    for (let i = 0; i < 10; i++) {
      if (this.state[`inp${i}`]) {
        newTotal += Number(this.state[`inp${i}`])
      }
    }
    this.setState({
      total: Math.floor(newTotal * 100) / 100
    })
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
      total: this.calcTotal(),
      inp0: this.props.data[0] ? this.props.data[0].price : null,
      inp1: this.props.data[1] ? this.props.data[1].price : null,
      inp2: this.props.data[2] ? this.props.data[2].price : null,
      inp3: this.props.data[3] ? this.props.data[3].price : null,
      inp4: this.props.data[4] ? this.props.data[4].price : null,
      inp5: this.props.data[5] ? this.props.data[5].price : null,
      inp6: this.props.data[6] ? this.props.data[6].price : null,
      inp7: this.props.data[7] ? this.props.data[7].price : null,
      inp8: this.props.data[8] ? this.props.data[8].price : null,
      inp9: this.props.data[9] ? this.props.data[9].price : null,
    })
  }

  render() {
    if (this.state.data) {
      // used to assign price values to correct state inp{n}
      let count = -1

      return (
        <div className="modal">
          <motion.button
            className="modal__add"
            onClick={this.openModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
          >
            <img className="modal__icon" src={list} alt="add icon" />
          </motion.button>

          <ReactModal ariaHideApp={false} isOpen={this.state.displayModal} onRequestClose={this.closeModal} className="modal__body" overlayClassName="modal__overlay">
            <h1>Shopping List</h1>
            <form className="modal__form">
              <ul className="modal__list">
                {this.props.data.map(index => {
                  count++
                  return (
                    <li className="modal__list-item" key={index.ing + index.price}>
                      <a className="modal__ingredient" href={index.url} target="_blank" rel="noopener noreferrer">{index.ing}</a>
                      <input className="modal__price" type="number" name={`inp${count}`} defaultValue={this.state[`inp${count}`]} onChange={this.changeValue} />
                    </li>
                  )
                })}
              </ul>
              <div className="modal__result">
                <p className="modal__total">{`Total: $${this.state.total}`}</p>
                <motion.button
                  className="modal__submit"
                  onClick={this.getTotal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.99 }}
                >Calculate
              </motion.button>
              </div>
            </form>
          </ReactModal>
        </div>
      )
    } else {
      return (<></>)
    }
  }
}