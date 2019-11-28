// packages
import React, { Component } from 'react';

// styles
import './DisplayDrinks.scss';

export default class DisplayDrinks extends Component {
  state = {
    carousel: null
  }

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
    const random = []
    for (let i = 0; i < 8; i++) {
      let ranNum = Math.floor(Math.random() * Math.floor(this.props.data.length) + 1)
      random.push(this.props.data[ranNum])
    }
    return random
  }

  // carousel controls
  toggleCarousel = (e) => {
    this.setState({
      carousel: e.target.value
    })
  }

  render() {
    let popDrinks = this.getPopularDrinks()
    let ranDrinks = this.getRandomDrinks()

    return (
      <div className="display-drinks">
        <div className="display-drinks__buttons">
          <button className="display-drinks__button" value="pop" onClick={this.toggleCarousel}>Popular</button>
          <button className="display-drinks__button" value="ran" onClick={this.toggleCarousel}>Discover</button>
        </div>

        <div className="display-drinks__carousel">
          {/* render popular drinks */}
          {this.state.carousel === "pop" ? popDrinks.map(index => {
            return (
              <div className="display-drinks__card" key={index.strDrink}>
                <img className="display-drinks__img" src={index.strDrinkThumb} alt={index.strDrink} />
                <h4 className="display-drinks__name">{index.strDrink}</h4>
              </div>
            )
          }) : null}

          {/* render random drinks */}
          {this.state.carousel === "ran" ? ranDrinks.map(index => {
            return (
              <div className="display-drinks__card" key={index.strDrink}>
                <img className="display-drinks__img" src={index.strDrinkThumb} alt={index.strDrink} />
                <h4 className="display-drinks__name">{index.strDrink}</h4>
              </div>
            )
          }) : null}
        </div>

      </div>
    )
  }
}