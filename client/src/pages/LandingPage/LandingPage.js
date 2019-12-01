// packages
import React, { Component } from 'react';
import Axios from 'axios';

// styles & assets
import './LandingPage.scss';

// components
import NavMenu from '../../components/NavMenu';
import Hero from '../../components/Hero';

export default class Landing extends Component {
  // getting api data
  getApi = () => {
    Axios.get("http://localhost:8080/drinks")
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  componentDidMount() {
    this.getApi()
  }

  render() {
    if (this.state) {
      return (
        <div className="landing">
          <NavMenu data={this.state.data} />
          <Hero data={this.state.data} />
        </div>
      )
    } else {
      return <p style={{ color: "white" }}>start the server</p>
    }
  }
}