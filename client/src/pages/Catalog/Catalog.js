// packages
import React, { Component } from "react";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Axios from "axios";

// styles & assets
import "./Catalog.scss";
import iconSearch from '../../styles/assets/icons/icon-search.svg';

// components
import NavMenu from "../../components/NavMenu";
import Search from '../../components/Search';

export default class Catalog extends Component {
  state = {
    data: null,
    ingData: null,
    dataCopy: null
  }

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
          dataCopy: drinks.data,
          ingData: ingredients.data
        })
      }))
  }

  // search feature to change state
  liveSearch = (e) => {
    let search = []
    this.state.dataCopy.forEach(index => {
      let strSearch = ''
      for (let i = 0; i < e.target.value.length; i++) {
        strSearch += index.strDrink[i]
      }
      if (e.target.value.toLowerCase() === strSearch.toLowerCase()) {
        search.push(index)
      }
    })
    this.setState({
      data: search
    })
  }

  // filter out the tags that can be chosen
  selectIng = () => {
    let selectTags = []
    this.state.ingData.forEach(index => {
      selectTags.push({ value: index.ing, label: index.ing })
    })
    return selectTags
  }

  // filter out the display so that it matches the ingredients it is given
  findTag = (e) => {
    if (!e || e.length === 0) {
      this.setState({
        data: this.state.dataCopy,
      })
    } else {
      let filter = this.state.data.filter(index => {
        for (let i = 1; i < 10; i++) {
          if (index['ingredients__00' + i] === e[e.length - 1].value) {
            return index
          }
        }
        return null
      })
      this.setState({
        data: filter
      })
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.data) {
      return (
        <div className="catalog">
          <NavMenu data={this.state.data} {...this.props} />

          <div className="catalog__search" onChange={this.liveSearch}>
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
            <Select isMulti options={this.selectIng()} onChange={this.findTag} />
          </div>

          <div className="catalog__display">
            {this.state.data.map(index => {
              return (
                <Link to={index.strDrink} key={index.strDrink}>
                  <div className="catalog__card">
                    <img className="catalog__img" src={index.strDrinkThumb} alt="drink" />
                    <p className="catalog__name">{index.strDrink}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      );
    }
    return (<></>)
  }
}
