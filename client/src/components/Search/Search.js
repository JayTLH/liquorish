// packages
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";

// styles & assets
import "./Search.scss";
// import iconSearch from "../../styles/assets/icons/icon-search.svg";

export default class Search extends Component {
  state = {
    value: "",
    suggestions: []
  };

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const drinks = this.props.data

    return inputLength === 0 ? [] : drinks.filter(drink =>
      drink.strDrink.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue = suggestion => {
    return suggestion.strDrink;
  };

  renderSuggestion = suggestion => {
    return <span>{suggestion.strDrink}</span>;
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for a Drink",
      value,
      onChange: this.onChange
    };

    return (
      <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </>
    );
  }
}
