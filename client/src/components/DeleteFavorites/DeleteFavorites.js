// packages
import React, { Component } from "react";

// styles & assets
import "./DeleteFavorites.scss";
import close from '../../styles/assets/icons/icon-x.svg';

export default class DeleteFavorites extends Component {
  render() {
    return (
      <button className="delete-fav" id={this.props.strDrink} onClick={this.props.removeFav}>
        <img className="delete-fav__icon" src={close} alt="x icon" id={this.props.strDrink}/>
      </button>
    );
  }
}
