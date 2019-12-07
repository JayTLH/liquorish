// packages
import React, { Component } from 'react';
import Axios from 'axios';

// styles and assets
import './LikeButton.scss';
import like from '../../styles/assets/icons/icon-like.png';
import likeActive from '../../styles/assets/icons/icon-like-active.png';

export default class LikeButton extends Component {
  state = {
    like: false
  }

  toggleLike = (e) => {
    if (!this.state.like) {
      Axios.post("http://localhost:8080/user", e)
        .then(res => {
          this.setState({
            like: !this.state.like
          })
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      Axios.delete(`http://localhost:8080/user/${e.strDrink}`)
        .then(res => {
          this.setState({
            like: !this.state.like
          })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  // checking to see if user already liked the drink
  checkLike = () => {
    Axios.get("http://localhost:8080/user")
      .then(res => {
        let findLike = res.data.find(index => {
          return (index.strDrink === this.props.match.params.drinkName)
        })
        if (findLike) {
          this.setState({
            like: !this.state.like
          })
        }
      })
  }

  componentDidMount() {
    this.checkLike()
  }

  render() {
    return (
      <button className="like-button__like" value={this.props.strDrink} onClick={() => { this.toggleLike(this.props.findDrink) }}>
        {this.state.like ?
          <img className="like-button__active" src={likeActive} alt="heart icon" />
          : <img className="like-button__like-img" src={like} alt="heart icon" />}
      </button>
    )
  }
}
