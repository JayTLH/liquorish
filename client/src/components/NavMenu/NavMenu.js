// packages
import React, { Component } from "react";
import { Link } from "react-router-dom";

// styles & assets
import "./NavMenu.scss";
import logobl from "../../styles/assets/logos/logo2-bl.png";
import iconSearch from "../../styles/assets/icons/icon-search.svg";

// components
import Search from "../Search";
import BurgerMenu from "../BurgerMenu";

export default class NavMenu extends Component {
  redirect = e => {
    e.preventDefault();
    this.props.history.push(`/${e.target.search.value}`);
  };

  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img className="nav__logo-left" src={logobl} alt="barkeep logo" />
        </Link>

        {this.props.match.path === '/catalog' ? null :
          <form className="nav__search" onSubmit={this.redirect}>
            <button className="nav__search-button">
              <img
                className="nav__search-icon"
                src={iconSearch}
                alt="search button"
              />
            </button>
            <Search data={this.props.data} />
          </form>
        }

        <BurgerMenu />
      </div>
    );
  }
}
