// packages
import React, { Component } from "react";
import Axios from "axios";

// styles & assets
import "./Creations.scss";

// components
import NavMenu from "../../components/NavMenu";

export default class Creations extends Component {
  state = {
    data: null
  }

  getApi = () => {
    Axios.get("http://localhost:8080/drinks")
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
        <div className="creations">
          <NavMenu data={this.state.data} {...this.props} />
        </div>
      )
    } else {
      return (<></>)
    }
  }
}