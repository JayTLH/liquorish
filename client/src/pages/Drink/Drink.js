// packages
import React, { Component } from "react";
import Axios from "axios";
import nanoid from 'nanoid';

// styles & assets
import "./Drink.scss";

// components
import NavMenu from "../../components/NavMenu";
import DrinkModal from "../../components/DrinkModal";

export default class Drink extends Component {
  state = {
    data: null,
    ingData: null,
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
          ingData: ingredients.data
        })
      }))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.data && this.state.ingData) {
      let findDrink = this.state.data.find(drinkIndex => {
        return drinkIndex.strDrink === this.props.match.params.drinkName
      })
      const { strAlcoholic, strDrink, strDrinkThumb, strGlass, strInstructions, ingredients__001, ingredients__002, ingredients__003, ingredients__004, ingredients__005, ingredients__006, ingredients__007, ingredients__008, ingredients__009, ingredients__010, measurements__001, measurements__002, measurements__003, measurements__004, measurements__005, measurements__006, measurements__007, measurements__008, measurements__009, measurements__010 } = findDrink
      let ingredients = [ingredients__001, ingredients__002, ingredients__003, ingredients__004, ingredients__005, ingredients__006, ingredients__007, ingredients__008, ingredients__009, ingredients__010];
      let measurements = [measurements__001, measurements__002, measurements__003, measurements__004, measurements__005, measurements__006, measurements__007, measurements__008, measurements__009, measurements__010];
      return (
        <div className="drink">
          <NavMenu data={this.state.data} {...this.props} />
          <div className="drink__container">
            <h1 className="drink__name">{strDrink}</h1>
            <div className="drink__box">
              <img className="drink__img" src={strDrinkThumb} alt={strDrink} />

              <div className="drink__text">
                <div className="drink__tags">
                  <p>{strAlcoholic}</p>
                  <p>{strGlass}</p>
                </div>

                <div className="drink__list">
                  <ul className="drink__ingredients">
                    {ingredients.map(index => {
                      if (index == null) {
                        return null;
                      } else {
                        let foundIng = this.state.ingData.find(name => {
                          return name.ing.toLowerCase() === index.toLowerCase()
                        })
                        const { ing, mea, price, url } = foundIng
                        return (
                          <li className="drink__ingredient-list" key={nanoid()}>
                            <a className="drink__ingredient-item" href={url} target="_blank">{index}</a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                  <ul className="drink__measurements">
                    {measurements.map(index => {
                      if (index == null) {
                        return null;
                      } else {
                        return (
                          <li className="drink__measurements-list" key={nanoid()}>
                            <p className="drink__measurement-item">{index}</p>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
                <p className="drink__instructions">{strInstructions}</p>
              </div>
            </div>
          </div>

          <DrinkModal />

        </div>
      );
    }
    return <p style={{ color: "white" }}>start the server</p>;
  }
}
