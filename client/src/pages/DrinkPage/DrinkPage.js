// packages
import React, { Component } from 'react';
import Axios from 'axios';

// styles
import './DrinkPage.scss';

export default class DrinkPage extends Component {
  getDrinkData = () => {
    Axios.get("http://localhost:8080/drinks")
      .then(res => {
        let drink = res.data.find(index => index.strDrink === this.props.match.params.drinkName)
        this.setState({
          data: drink
        })
      })
  }

  componentDidMount() {
    this.getDrinkData()
  }

  render() {
    if (this.state) {
      const { strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass, strInstructions, ingredients, measurements } = this.state.data
      return (
        <div className="drink">
          <div className="drink__background"></div>
          <div className="drink__container">
            <h1 className="drink__name">{strDrink}</h1>
            <img className="drink__img" src={strDrinkThumb} alt={strDrink} />
            <p>TYPE: {strAlcoholic}</p>
            <p>CATEGORY: {strCategory}</p>
            <p>GLASS: {strGlass}</p>

            <div className="drink__list">
              <div className="drink__ingredients">
                {ingredients.map(index => {
                  if (index == null) {
                    return null
                  } else {
                    return (
                      <p key={index + ingredients.indexOf(index)}>{index}</p>
                    )
                  }
                })}
              </div>
              <div className="drink__measurements">
                {measurements.map(index => {
                  if (index == null) {
                    return null
                  } else {
                    return (
                      <p key={index + ingredients.indexOf(index)}>{index}</p>
                    )
                  }
                })}
              </div>
            </div>
            <p>{strInstructions}</p>
          </div>
        </div>
      )
    } else {
      return (<></>)
    }
  }
}