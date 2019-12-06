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
    data: null
  }

  getApi = () => {
    Axios.get("http://localhost:8080/user")
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.getApi()
  }

  render() {
    if (this.state.data) {
      return (
        <div className="favorites">
          <NavMenu data={this.state.data} {...this.props} />
          <div className="favorites__container">
            {this.state.data.length ? this.state.data.map(index => {
              return (
                <div className="favorites__card" key={index.strDrink}>
                  <Link to={`/${index.strDrink}`}>
                    <img className="favorites__img" src={index.strDrinkThumb} alt="drink" />
                  </Link>
                  <h2 className="favorites__name">{index.strDrink}</h2>
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