// packages
import React, { Component } from "react";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Axios from "axios";

// styles & assets
import "./Catalog.scss";
import iconSearch from '../../styles/assets/icons/icon-search.svg';
import iconIngredients from '../../styles/assets/icons/icon-ingredients.png';

// components
import NavMenu from "../../components/NavMenu";
import TopButton from '../../components/TopButton';

// styling for the select component
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "550px",
    background: "none",
    border: "none"
  })
}

const pingURL = `${process.env.REACT_APP_SERVER || ''}`

export default class Catalog extends Component {
  state = {
    data: null,
    ingData: null,
    dataCopy: null
  }

  getDrinkData = () => {
    return Axios.get(`${pingURL}/drinks`);
  };

  getIngredientData = () => {
    return Axios.get(`${pingURL}/ingredients`);
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
      .catch(err => {
        console.error(err)
      })
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
        <div className="catalog" onScroll={this.scrollAppear}>
          <div className="background"></div>
          <NavMenu data={this.state.data} {...this.props} />

          <div className="catalog__search" onChange={this.liveSearch}>
            <button className="catalog__search-button">
              <img
                className="catalog__search-icon"
                src={iconSearch}
                alt="search button"
              />
            </button>
            <input className="catalog__search-input" type="text" placeholder="Search for Names" />
          </div>

          <div className="catalog__tags">
            <button className="catalog__search-button">
              <img
                className="catalog__ing-icon"
                src={iconIngredients}
                alt="search button"
              />
            </button>
            <Select styles={customStyles} isMulti options={this.selectIng()} onChange={this.findTag} />
          </div>

          <div className="catalog__display">
            {this.state.data.map(index => {
              return (
                <Link className="catalog__link" to={index.strDrink} key={index.strDrink}>
                  <div className="catalog__card">
                    <div className="catalog__background">
                      <img className="catalog__img" src={index.strDrinkThumb} alt="drink" />
                      <p className="catalog__name">{index.strDrink}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <TopButton />
        </div>
      );
    }
    return (<></>)
  }
}
