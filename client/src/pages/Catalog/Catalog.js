// packages
import React, { Component } from "react";
import Select from 'react-select';
import Axios from "axios";

// styles & assets
import "./Catalog.scss";
import iconSearch from '../../styles/assets/icons/icon-search.svg';

// components
import NavMenu from "../../components/NavMenu";
import Search from '../../components/Search';

export default class Catalog extends Component {
  getDrinkData = () => {
    return Axios.get("http://localhost:8080/drinks");
  };

  getIngredientData = () => {
    return Axios.get("http://localhost:8080/ingredients");
  };

  getData = () => {
    Axios.all([this.getDrinkData(), this.getIngredientData()])
      .then(Axios.spread((drinks, ingredients) => {
        this.setState({
          data: drinks.data,
          ingData: ingredients.data
        })
      }))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state) {
      return (
        <div className="catalog">
          <NavMenu data={this.state.data} {...this.props} />

          <div className="catalog__search">
            <button className="catalog__search-button">
              <img
                className="catalog__search-icon"
                src={iconSearch}
                alt="search button"
              />
            </button>
            <Search data={this.state.data} />
          </div>

          <div className="catalog__tags">
            <button className="catalog__search-button">
              <img
                className="catalog__search-icon"
                src={iconSearch}
                alt="search button"
              />
            </button>
            <Select isMulti options={this.state.data} />
          </div>
        </div>
      );
    }
    return (<></>)
  }
}
