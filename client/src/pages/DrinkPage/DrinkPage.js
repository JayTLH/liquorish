// packages
import React, { Component } from 'react';
import Axios from 'axios';
import { useSpring } from 'react-spring';

// styles & assets
import './DrinkPage.scss';
import background4 from '../../styles/assets/images/b4.jpg';

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
          <img className="drink__background-img" src={background4} alt="background" />
          <div className="drink__container">
            <h1 className="drink__name">{strDrink}</h1>
            <div className="drink__box">
              <img className="drink__img" src={strDrinkThumb} alt={strDrink} />

              <div className="drink__text">

                <div className="drink__tags">
                  <p>TYPE: {strAlcoholic}</p>
                  <p>CATEGORY: {strCategory}</p>
                  <p>GLASS: {strGlass}</p>
                </div>

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
                <p className="drink__instructions">{strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (<>loading</>)
  }
}