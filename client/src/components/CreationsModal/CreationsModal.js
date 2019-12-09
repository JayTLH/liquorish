// packages
import React, { Component } from 'react'
import ReactModal from 'react-modal';
import { motion } from "framer-motion";
import Axios from 'axios';

// styles and assets
import './CreationsModal.scss';
import add from '../../styles/assets/icons/icon-add.svg';

export default class DrinkModal extends Component {
  state = {
    displayModal: false,
    checkFile: false
  }

  openModal = () => {
    this.setState({
      displayModal: true
    })
  }

  closeModal = () => {
    this.setState({
      displayModal: false,
      checkFile: false
    })
  }

  fileCheck = (e) => {
    this.setState({
      checkFile: true
    })
  }

  uploadCreation = (e) => {
    // console.log(e.target.type.value)
    e.preventDefault()
    let formDataBody = new FormData();
    formDataBody.append('uploadImage', e.target.image.files[0])
    formDataBody.append('strDrink', e.target.name.value)
    formDataBody.append('strAlcoholic', e.target.type.value)
    formDataBody.append('strGlass', e.target.glass.value)
    formDataBody.append('strInstructions', e.target.instructions.value)
    formDataBody.append('ingredients__001', e.target.ingredients__001.value)

    Axios.post("http://localhost:8080/creations", formDataBody)
  }

  render() {
    return (
      <div className="creations-modal">
        <motion.button
          className="creations-modal__add"
          onClick={this.openModal}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.99 }}
        >
          <img className="creations-modal__icon-add" src={add} alt="add icon" />
        </motion.button>

        <ReactModal ariaHideApp={false} isOpen={this.state.displayModal} onRequestClose={this.closeModal} className="modal__body" overlayClassName="modal__overlay">
          <h1>Create a New Drink</h1>
          <form className="creations-modal__form" onSubmit={this.uploadCreation} autoComplete="off">
            <input className="creations-modal__image" type="file" name="image" id="image" onChange={this.fileCheck} />
            {this.state.checkFile ? <label className="creations-modal__image-label" htmlFor="image">Uploaded</label>
              : <label className="creations-modal__image-label" htmlFor="image">Choose Image</label>}
            <input className="creations-modal__name" type="text" name="name" placeholder="Name of the Drink" value="testname" />
            <div className="creations-modal__box">
              <select className="creations-modal__type" name="type">
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non-Alcoholic">Non-Alcoholic</option>
              </select>
              <input className="creations-modal__glass" type="text" name="glass" placeholder="Container" value="testglass" />
            </div>
            <textarea className="creations-modal__instructions" type="text" name="instructions" placeholder="Please list the steps to create this drink" value="testinstructions" />
            <label className="creations-modal__ing-label">Ingredients</label>
            <div className="creations-modal__stats">
              <input className="creations-modal__ingredients" type="text" name="ingredients__001" placeholder="Name of Ingredient" value="testingredient" />
              <input className="creations-modal__measurements" type="text" name="measurements__001" placeholder="Measurement" value="testmeasurement" />
            </div>
            <motion.button
              className="creations-modal__submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              Submit
            </motion.button>
          </form>
        </ReactModal>
      </div>
    )
  }
}
