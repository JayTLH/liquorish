// packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

// styles & assets
import "./Creations.scss";

// components
import NavMenu from "../../components/NavMenu";
import CreationsModal from "../../components/CreationsModal";

export default class Creations extends Component {
  state = {
    data: null,
    creationsData: null
  }

  getDrinkData = () => {
    return Axios.get("http://localhost:8080/drinks");
  };

  getCreationsData = () => {
    return Axios.get("http://localhost:8080/creations");
  };

  getData = () => {
    Axios.all([this.getDrinkData(), this.getCreationsData()])
      .then(Axios.spread((drinks, creations) => {
        this.setState({
          data: drinks.data,
          creationsData: creations.data
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
        <div className="creations">
          <NavMenu data={this.state.data} {...this.props} />

          <div className="creations__container">
            {this.state.creationsData.length ? this.state.creationsData.map(index => {
              return (
                <div className="creations__card" key={index.strDrink}>
                  <Link to={`/${index.strDrink}`}>
                    <img className="creations__img" src={index.strDrinkThumb} alt="drink" />
                  </Link>
                  <h2 className="creations__name">{index.strDrink}</h2>
                </div>
              )
            }) : <div>Add a New Drink!</div>}
          </div>

          <CreationsModal />

        </div>
      )
    } else {
      return (<></>)
    }
  }
}