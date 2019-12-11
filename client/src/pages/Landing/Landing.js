// packages
import React, { Component } from 'react';
import Axios from 'axios';

// styles & assets
import './Landing.scss';

// components
import NavMenu from '../../components/NavMenu';
import Hero from '../../components/Hero';

const pingURL = `${process.env.REACT_APP_SERVER || "http://localhost:8080"}`

export default class Landing extends Component {
  // getting api data
  getApi = () => {
    Axios.get(`${pingURL}/drinks`)
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
    if (this.state) {
      return (
        <div className="landing">
          <NavMenu data={this.state.data} {...this.props} />
          <Hero data={this.state.data} />
        </div>
      )
    } else {
      return <p style={{ color: "white" }}>start the server</p>
    }
  }
}