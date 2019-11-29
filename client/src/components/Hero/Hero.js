// packages
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

// styles & assets
import './Hero.scss'
import logo from '../../styles/assets/logos/logo.png';
import discover from '../../styles/assets/logos/discover.png';
// import hero1 from '../../styles/assets/images/h1.jpg'
import hero2 from '../../styles/assets/images/h2.jpg';
import hero3 from '../../styles/assets/images/h3.jpg';

// randomize hero image
const drinks = [];
const heroImgs = [hero2, hero3];
let ranNum = Math.floor(Math.random() * Math.floor(heroImgs.length))

export default class Hero extends Component {
  state = {
    value: '',
    suggestions: []
  };

  getAllDrinks = () => {
    this.props.data.forEach(index => {
      drinks.push({name: index.strDrink})
    })
    return drinks
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : drinks.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name}
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return (
      <div className="hero">
        <img className="hero__img" src={heroImgs[ranNum]} alt="wine glasses laid upside down on a hanger"></img>
        <div className="hero__container">
          <img className="hero__logo" src={logo} alt="a"></img>
          {/* search feature */}
          <Autosuggest
            suggestions={drinks}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          <img className="hero__discover" src={discover} alt="a"></img>
        </div>
      </div>
    )
  }
}