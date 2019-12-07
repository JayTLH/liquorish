// packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

// styles & assets
import "./Favorites.scss";

// components
import NavMenu from "../../components/NavMenu";

export default class Favorites extends Component {
  state = {
    data: null,
    userData: null
  }

  getDrinkData = () => {
    return Axios.get("http://localhost:8080/drinks");
  };

  getCreationsData = () => {
    return Axios.get("http://localhost:8080/user");
  };

  getData = () => {
    Axios.all([this.getDrinkData(), this.getCreationsData()])
      .then(Axios.spread((drinks, user) => {
        this.setState({
          data: drinks.data,
          userData: user.data
        })
      }))
      .catch(err => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    if (this.state.data) {
      return (
        <div className="favorites">
          <NavMenu data={this.state.data} {...this.props} />
          <div className="favorites__container">
            {this.state.userData.length ? this.state.userData.map(index => {
              return (
                <div className="favorites__card" key={index.strDrink}>
                  <Link className="favorites__link" to={`/${index.strDrink}`}>
                    <img className="favorites__img" src={index.strDrinkThumb} alt="drink" />
                    <h2 className="favorites__name">{index.strDrink}</h2>
                  </Link>
                </div>
              )
            }) : <div>Add Something To Your Favorites</div>}
          </div>
        </div>
      )
    }
    return <></>;
  }
}