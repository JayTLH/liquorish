// packages
import React, { Component } from 'react'
import Axios from 'axios'

// styles & assets
import './LandingPage.scss'

// components
import Hero from '../../components/Hero'
import DisplayDrinks from '../../components/DisplayDrinks'
import Footer from '../../components/Footer'

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
          <Hero data={this.state.data} />
          <DisplayDrinks data={this.state.data} />
          <Footer />
        </div>
      )
    } else {
      return <>Start the server</>
    }
  }
}