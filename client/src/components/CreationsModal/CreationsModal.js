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
    checkFile: false,
    ingredients__001: false,
    ingredients__002: false,
    ingredients__003: false,
    ingredients__004: false,
    ingredients__005: false,
    ingredients__006: false,
    ingredients__007: false,
    ingredients__008: false,
    ingredients__009: false,
    ingredients__010: false
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

  populateInput = (e) => {
    if (e.target.value.length !== 0) {
      this.setState({
        [e.target.name]: true
      })
    } else {
      this.setState({
        [e.target.name]: false
      })
    }
  }

  uploadCreation = (e) => {
    e.preventDefault()
    let formDataBody = new FormData();
    formDataBody.append('uploadImage', e.target.image.files[0])
    formDataBody.append('strDrink', e.target.name.value)
    formDataBody.append('strAlcoholic', e.target.type.value)
    formDataBody.append('strGlass', e.target.glass.value)
    formDataBody.append('strInstructions', e.target.instructions.value)
    if (e.target.ingredients__001) {
      if (e.target.ingredients__001.value) {
        formDataBody.append('ingredients__001', e.target.ingredients__001.value)
        formDataBody.append('measurements__001', e.target.measurements__001.value)
      }
    }
    if (e.target.ingredients__002) {
      if (e.target.ingredients__002.value) {
        formDataBody.append('ingredients__002', e.target.ingredients__002.value)
        formDataBody.append('measurements__002', e.target.measurements__002.value)
      }
    }
    if (e.target.ingredients__003) {
      if (e.target.ingredients__003.value) {
        formDataBody.append('ingredients__003', e.target.ingredients__003.value)
        formDataBody.append('measurements__003', e.target.measurements__003.value)
      }
    }
    if (e.target.ingredients__004) {
      if (e.target.ingredients__004.value) {
        formDataBody.append('ingredients__004', e.target.ingredients__004.value)
        formDataBody.append('measurements__004', e.target.measurements__004.value)
      }
    }
    if (e.target.ingredients__005) {
      if (e.target.ingredients__005.value) {
        formDataBody.append('ingredients__005', e.target.ingredients__005.value)
        formDataBody.append('measurements__005', e.target.measurements__005.value)
      }
    }
    if (e.target.ingredients__006) {
      if (e.target.ingredients__006.value) {
        formDataBody.append('ingredients__006', e.target.ingredients__006.value)
        formDataBody.append('measurements__006', e.target.measurements__006.value)
      }
    }
    if (e.target.ingredients__007) {
      if (e.target.ingredients__007.value) {
        formDataBody.append('ingredients__007', e.target.ingredients__007.value)
        formDataBody.append('measurements__007', e.target.measurements__007.value)
      }
    }
    if (e.target.ingredients__008) {
      if (e.target.ingredients__008.value) {
        formDataBody.append('ingredients__008', e.target.ingredients__008.value)
        formDataBody.append('measurements__008', e.target.measurements__008.value)
      }
    }
    if (e.target.ingredients__009) {
      if (e.target.ingredients__009.value) {
        formDataBody.append('ingredients__009', e.target.ingredients__009.value)
        formDataBody.append('measurements__009', e.target.measurements__009.value)
      }
    }
    if (e.target.ingredients__010) {
      if (e.target.ingredients__010.value) {
        formDataBody.append('ingredients__010', e.target.ingredients__010.value)
        formDataBody.append('measurements__010', e.target.measurements__010.value)
      }
    }

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
            {this.state.checkFile ?
              <motion.label
                className="creations-modal__image-label"
                htmlFor="image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.99 }}>
                Uploaded
              </motion.label>
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
              <div className="creations-modal__ingredient-input">
                <input className="creations-modal__ingredients" type="text" name="ingredients__001" placeholder="Name of Ingredient" onChange={this.populateInput} />
                <input className="creations-modal__measurements" type="text" name="measurements__001" placeholder="Measurement" value="testmeasurement" />
              </div>
              {this.state.ingredients__001 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__002" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__002" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__002 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__003" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__003" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__003 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__004" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__004" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__004 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__005" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__005" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__005 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__006" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__006" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__006 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__007" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__007" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__007 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__008" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__008" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__008 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__009" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__009" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
              {this.state.ingredients__009 ?
                <div className="creations-modal__ingredient-input" >
                  <input className="creations-modal__ingredients" type="text" name="ingredients__010" placeholder="Name of Ingredient" onChange={this.populateInput} />
                  <input className="creations-modal__measurements" type="text" name="measurements__010" placeholder="Measurement" value="testmeasurement" />
                </div>
                : null}
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
