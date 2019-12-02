// packages
import React, { Component } from "react";
import Axios from "axios";

// styles & assets
import "./Customize.scss";

// components
import NavMenu from "../../components/NavMenu";

export default class Customize extends Component {
  getApi = () => {
    Axios.get("http://localhost:8080/drinks").then(res => {
      this.setState({
        data: res.data
      });
    });
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    if (this.state) {
      return (
        <div className="customize">
          <NavMenu data={this.state.data} {...this.props} />
        </div>
      );
    }
    return (<></>)
  }
}
