// packages
import React, { Component } from 'react'
import ReactModal from 'react-modal';

// styles and assets
import './DrinkModal.scss';
import add from './Icon-add.svg';

export default class DrinkModal extends Component {
  state = {
    displayModal: false
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

  render() {
    return (
      <div className="modal">
        <button className="modal__add" onClick={this.openModal}>
          <img className="modal__add-icon" src={add} alt="add icon" />
        </button>
        <ReactModal ariaHideApp={false} isOpen={this.state.displayModal} onRequestClose={this.closeModal} className="modal__body" overlayClassName="modal__overlay">
          <h1 className="modal__title">Add New</h1>
          <form className="modal__form" onSubmit={this.props.submitHandler}>
            <div className="modal__warehouse">
              <label className="modal__label">WAREHOUSE</label><br />
              <input type="text" name="warehouse" placeholder="Name & ID" />
            </div>
            <div className="modal__address">
              <label className="modal__label">ADDRESS</label><br />
              <input type="text" name="address" placeholder="Enter Address" />
            </div>
            <div className="modal__location">
              <label className="modal__label">LOCATION</label><br />
              <select className="modal__select" type="text" name="location">
                <option value="Toronto, ON">Toronto, ON</option>
              </select>
            </div>
            <div className="modal__contact-name">
              <label className="modal__label">CONTACT NAME</label><br />
              <input type="text" name="contact-name" placeholder="Enter Name" />
            </div>
            <div className="modal__position">
              <label className="modal__label">POSITION</label><br />
              <input type="text" name="position" placeholder="Enter Position" />
            </div>
            <div className="modal__phone-number">
              <label className="modal__label">PHONE NUMBER</label><br />
              <input type="number" name="phone-number" placeholder="(xxx) xxx-xxxx" />
            </div>
            <div className="modal__email">
              <label className="modal__label">EMAIL</label><br />
              <input type="text" name="email" placeholder="Enter Email" />
            </div>
            <div className="modal__item-description">
              <label className="modal__label">ITEM DESCRIPTION</label><br />
              <textarea className="modal__item-description-input" type="text" name="item-description" placeholder="Use commas to separate each category" />
            </div>
            {this.props.inputError ? <p>Inputs are invalid</p> : null}
            <div className="modal__buttons">
              <button className="modal__save">SAVE</button>
              <button className="modal__cancel" onClick={this.closeModal}>CANCEL</button>
            </div>
          </form>
        </ReactModal>
      </div>
    )
  }
}