// packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

// styles & assets
import "./Creations.scss";

// components
import NavMenu from "../../components/NavMenu";
import CreationsModal from "../../components/CreationsModal";
import TopButton from '../../components/TopButton';
import DeleteButton from '../../components/DeleteButton';

const pingURL = `${process.env.CREATE_REACT_APP_BACKEND || "http://localhost:8080"}`

export default class Creations extends Component {
  state = {
    data: null,
    creationsData: null
  }

  getDrinkData = () => {
    return Axios.get(`${pingURL}/drinks`);
  };

  getCreationsData = () => {
    return Axios.get(`${pingURL}/creations`);
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

  uploadCreation = (e) => {
    let formDataBody = new FormData();
    formDataBody.append('uploadImage', e.target.image.files[0])
    formDataBody.append('strDrink', e.target.name.value)
    formDataBody.append('strAlcoholic', e.target.type.value)
    formDataBody.append('strGlass', e.target.glass.value)
    formDataBody.append('strInstructions', e.target.instructions.value)
    if (e.target.ingredients__001) {
      if (e.target.ingredients__001.value) {
        formDataBody.append('ingredients__001', e.target.ingredients__001.value)
        formDataBody.append('measurements__001', e.target.measurements__001.value)
      }
    }
    if (e.target.ingredients__002) {
      if (e.target.ingredients__002.value) {
        formDataBody.append('ingredients__002', e.target.ingredients__002.value)
        formDataBody.append('measurements__002', e.target.measurements__002.value)
      }
    }
    if (e.target.ingredients__003) {
      if (e.target.ingredients__003.value) {
        formDataBody.append('ingredients__003', e.target.ingredients__003.value)
        formDataBody.append('measurements__003', e.target.measurements__003.value)
      }
    }
    if (e.target.ingredients__004) {
      if (e.target.ingredients__004.value) {
        formDataBody.append('ingredients__004', e.target.ingredients__004.value)
        formDataBody.append('measurements__004', e.target.measurements__004.value)
      }
    }
    if (e.target.ingredients__005) {
      if (e.target.ingredients__005.value) {
        formDataBody.append('ingredients__005', e.target.ingredients__005.value)
        formDataBody.append('measurements__005', e.target.measurements__005.value)
      }
    }
    if (e.target.ingredients__006) {
      if (e.target.ingredients__006.value) {
        formDataBody.append('ingredients__006', e.target.ingredients__006.value)
        formDataBody.append('measurements__006', e.target.measurements__006.value)
      }
    }
    if (e.target.ingredients__007) {
      if (e.target.ingredients__007.value) {
        formDataBody.append('ingredients__007', e.target.ingredients__007.value)
        formDataBody.append('measurements__007', e.target.measurements__007.value)
      }
    }
    if (e.target.ingredients__008) {
      if (e.target.ingredients__008.value) {
        formDataBody.append('ingredients__008', e.target.ingredients__008.value)
        formDataBody.append('measurements__008', e.target.measurements__008.value)
      }
    }
    if (e.target.ingredients__009) {
      if (e.target.ingredients__009.value) {
        formDataBody.append('ingredients__009', e.target.ingredients__009.value)
        formDataBody.append('measurements__009', e.target.measurements__009.value)
      }
    }
    if (e.target.ingredients__010) {
      if (e.target.ingredients__010.value) {
        formDataBody.append('ingredients__010', e.target.ingredients__010.value)
        formDataBody.append('measurements__010', e.target.measurements__010.value)
      }
    }

    Axios.post(`${pingURL}/creations`, formDataBody)
  }

  removeButton = (e) => {
    Axios.delete(`${pingURL}/creations/${e.target.id}`)
      .then(res => {
        this.setState({
          creationsData: res.data
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
        <div className="creations">
          <div className="background"></div>
          <NavMenu data={this.state.data} {...this.props} />

          <div className="creations__container">
            {this.state.creationsData.length ? this.state.creationsData.map(index => {
              return (
                <div className="creations__card" key={index.strDrink}>
                <Link to={`/${index.strDrink}`}>
                  <img className="creations__img" src={index.strDrinkThumb} alt="drink" />
                </Link>
                <div className="creations__text">
                  <div className="creations__header">
                    <Link className="creations__link" to={`/${index.strDrink}`}>
                      <h2 className="creations__name">{index.strDrink}</h2>
                    </Link>
                    <DeleteButton strDrink={index.strDrink} removeButton={this.removeButton} />
                  </div>
                  <ul className="creations__list">
                    {index.ingredients__001 ? <li className="creations__list-item">{index.ingredients__001}</li> : null}
                    {index.ingredients__002 ? <li className="creations__list-item">{index.ingredients__002}</li> : null}
                    {index.ingredients__003 ? <li className="creations__list-item">{index.ingredients__003}</li> : null}
                    {index.ingredients__004 ? <li className="creations__list-item">{index.ingredients__004}</li> : null}
                    {index.ingredients__005 ? <li className="creations__list-item">{index.ingredients__005}</li> : null}
                    {index.ingredients__006 ? <li className="creations__list-item">{index.ingredients__006}</li> : null}
                    {index.ingredients__007 ? <li className="creations__list-item">{index.ingredients__007}</li> : null}
                    {index.ingredients__008 ? <li className="creations__list-item">{index.ingredients__008}</li> : null}
                    {index.ingredients__009 ? <li className="creations__list-item">{index.ingredients__009}</li> : null}
                    {index.ingredients__010 ? <li className="creations__list-item">{index.ingredients__010}</li> : null}
                  </ul>
                </div>
              </div>
              )
            }) : <div>Add a New Drink!</div>}
          </div>

          <CreationsModal uploadCreation={this.uploadCreation} />

          <TopButton />
        </div>
      )
    } else {
      return (<></>)
    }
  }
}