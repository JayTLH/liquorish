// packages
import React, { Component } from "react";

// styles & assets
import "./DeleteButton.scss";
import close from '../../styles/assets/icons/icon-x.svg';

export default class DeleteButton extends Component {
  render() {
    return (
      <button className="delete-button" id={this.props.strDrink} onClick={this.props.removeButton}>
        <img className="delete-button__icon" src={close} alt="x icon" id={this.props.strDrink}/>
      </button>
    );
  }
}
