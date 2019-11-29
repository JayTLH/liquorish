// packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// styles
import './DisplayDrinks.scss';

// displays a list of drinks depending on the button clicked in the hero component
export default class DisplayDrinks extends Component {
  getPopularDrinks = () => {
    const popular = []
    this.props.data.forEach(index => {
      if (index.strDrink === "Mojito" || index.strDrink === "Old Fashioned" || index.strDrink === "Long Island Tea" || index.strDrink === "Negroni" || index.strDrink === "Whiskey Sour" || index.strDrink === "Daiquiri" || index.strDrink === "Margarita" || index.strDrink === "Manhattan") {
        popular.push(index)
      }
    })
    return popular
  }

  getRandomDrinks = () => {
    const dataClone = this.props.data.slice()
    const random = []
    for (let i = 0; i < 8; i++) {
      let ranNum = Math.floor(Math.random() * Math.floor(dataClone.length))
      random.push(dataClone[ranNum])
      dataClone.splice(ranNum, 1)
    }
    return random
  }

  render() {
    let popDrinks = this.getPopularDrinks()
    let ranDrinks = this.getRandomDrinks()

    return (
      <div className="display-drinks">
        <div className="display-drinks__filter"></div>
        {/* renders popular drinks when the popular button is clicked */}
        {this.props.display === "popular" ? popDrinks.map(index => {
          return (
            <Link to={index.strDrink} key={index.strDrink}>
              <div className="display-drinks__card">
                <img className="display-drinks__img" src={index.strDrinkThumb} alt={index.strDrink} />
                <p className="display-drinks__name">{index.strDrink}</p>
              </div>
            </Link>
          )
        }) : null}

        {/* render random drinks when the discover button is clicked */}
        {this.props.display === "random" ? ranDrinks.map(index => {
          return (
            <Link to={index.strDrink} key={index.strDrink}>
              <div className="display-drinks__card">
                <img className="display-drinks__img" src={index.strDrinkThumb} alt={index.strDrink} />
                <p className="display-drinks__name">{index.strDrink}</p>
              </div>
            </Link>
          )
        }) : null}
      </div>
    )
  }
}