// packages
import React, { Component } from "react";
import Axios from "axios";
import nanoid from 'nanoid';
import BaseSF from 'base64-arraybuffer';

// styles & assets
import "./Drink.scss";

// components
import NavMenu from "../../components/NavMenu";
import LikeButton from '../../components/LikeButton';
import DrinkModal from "../../components/DrinkModal";

const pingURL = `${process.env.REACT_APP_SERVER || ''}`

export default class Drink extends Component {
  state = {
    data: null,
    ingData: null,
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
          ingData: ingredients.data
        })
      }))
      .catch(err => {
        console.error(err)
      })
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

      // making props for the modal
      let ingredientsData = []
      ingredients.forEach(ingIndex => {
        this.state.ingData.forEach(dataIndex => {
          if (ingIndex !== null) {
            if (ingIndex.toLowerCase() === dataIndex.ing.toLowerCase() && ingIndex !== null) {
              ingredientsData.push(dataIndex)
            }
          }
        })
      })

      let imgSrc = BaseSF.encode(strDrinkThumb.data)

      return (
        <div className="drink">
          <NavMenu data={this.state.data} {...this.props} />
          <div className="background"></div>
          <div className="drink__container">
            <div className="drink__top-box">
              <h1 className="drink__name">{strDrink}</h1>
              <LikeButton strDrink={strDrink} findDrink={findDrink} {...this.props} />
            </div>

            <div className="drink__box">
              {strDrinkThumb[0] === "h" ? <img className="drink__img" src={strDrinkThumb} alt={strDrink} />
              : <img className="drink__img" src={`data:image/jpeg;base64,${imgSrc}`} alt="drink" />}

              <div className="drink__text">
                <div className="drink__tags">
                  <p>{strAlcoholic}</p>
                  <p>{strGlass}</p>
                </div>

                <div className="drink__list">
                  <ul className="drink__ingredients">
                    {ingredientsData.map(index => {
                      const { ing, url } = index
                      return (
                        <li className="drink__ingredient-list" key={nanoid()}>
                          <a className="drink__ingredient-item" href={url} target="_blank" rel="noopener noreferrer">{ing}</a>
                        </li>
                      );
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

          <DrinkModal data={ingredientsData} />

        </div>
      );
    }
    return <p style={{ color: "white" }}>start the server</p>;
  }
}