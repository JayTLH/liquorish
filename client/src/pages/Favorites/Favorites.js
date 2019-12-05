// packages
import React, { Component } from "react";
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
          {this.state.data.map(index => {
            return (
              <div className="favorites__card" key={index.strDrink}>
                <img className="favorites__img" src={index.strDrinkThumb} alt="drink" />
              </div>
            )
          })}
        </div>
      )
    }
    return <></>;
  }
}