// packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

// styles & assets
import "./Favorites.scss";

// components
import NavMenu from "../../components/NavMenu";
import DeleteButton from '../../components/DeleteButton';
import TopButton from '../../components/TopButton';

const pingURL = `${process.env.CREATE_REACT_APP_BACKEND || "http://localhost:8080"}`

export default class Favorites extends Component {
  state = {
    data: null,
    userData: null
  }

  getDrinkData = () => {
    return Axios.get(`${pingURL}/drinks`);
  };

  getCreationsData = () => {
    return Axios.get(`${pingURL}/user`);
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

  // delete favorite function
  removeButton = (e) => {
    Axios.delete(`${pingURL}/user/${e.target.id}`)
      .then(res => {
        this.setState({
          userData: res.data
        })
      })
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
          <div className="background"></div>
          <NavMenu data={this.state.data} {...this.props} />
          <div className="favorites__container">
            {this.state.userData.length ? this.state.userData.map(index => {
              return (
                <div className="favorites__card" key={index.strDrink}>
                  <Link to={`/${index.strDrink}`}>
                    <img className="favorites__img" src={index.strDrinkThumb} alt="drink" />
                  </Link>
                  <div className="favorites__text">
                    <div className="favorites__header">
                      <Link className="favorites__link" to={`/${index.strDrink}`}>
                        <h2 className="favorites__name">{index.strDrink}</h2>
                      </Link>
                      <DeleteButton strDrink={index.strDrink} removeButton={this.removeButton} />
                    </div>
                    <ul className="favorites__list">
                      {index.ingredients__001 ? <li className="favorites__list-item">{index.ingredients__001}</li> : null}
                      {index.ingredients__002 ? <li className="favorites__list-item">{index.ingredients__002}</li> : null}
                      {index.ingredients__003 ? <li className="favorites__list-item">{index.ingredients__003}</li> : null}
                      {index.ingredients__004 ? <li className="favorites__list-item">{index.ingredients__004}</li> : null}
                      {index.ingredients__005 ? <li className="favorites__list-item">{index.ingredients__005}</li> : null}
                      {index.ingredients__006 ? <li className="favorites__list-item">{index.ingredients__006}</li> : null}
                      {index.ingredients__007 ? <li className="favorites__list-item">{index.ingredients__007}</li> : null}
                      {index.ingredients__008 ? <li className="favorites__list-item">{index.ingredients__008}</li> : null}
                      {index.ingredients__009 ? <li className="favorites__list-item">{index.ingredients__009}</li> : null}
                      {index.ingredients__010 ? <li className="favorites__list-item">{index.ingredients__010}</li> : null}
                    </ul>
                  </div>
                </div>
              )
            }) : <div>Add Something To Your Favorites</div>}
          </div>
          <TopButton />
        </div>
      )
    }
    return <></>;
  }
}