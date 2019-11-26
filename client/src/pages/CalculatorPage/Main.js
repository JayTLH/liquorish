import React, { Component } from 'react';
import Axios from 'axios';
import Nanoid from 'nanoid';
import './Main.scss';
import MainVideo from '../MainVideo';
import CurrentVideoInfo from '../CurrentVideoInfo';
import AsideVideos from '../AsideVideos';

export default class Main extends Component {
  state = {
    videoListData: null,
    mainVideoData: null,
    postCommentArray: null
  }

  initialApiData = () => {
    Axios.get(`http://localhost:8080/videos`)
      .then(res => {
        const mainId = res.data[0].id
        const listData = res.data
        Axios.get(`http://localhost:8080/videos/${mainId}`)
          .then(res => {
            this.setState({
              videoListData: listData,
              mainVideoData: res.data,
              postCommentArray: res.data.comments
            })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  dynamicTimestamp = (timestamp) => {
    let currentTime = Date.now();
    let timeDifference = (currentTime - timestamp) / 1000;
    let resultTime = null;
    Number(timeDifference);
    let convertTime = Math.floor(timeDifference);
    if (convertTime < 60 && convertTime > 0) {
      resultTime = convertTime + "s ago";
    } else if (convertTime < (60 * 60) && convertTime >= 60) {
      resultTime = Math.floor(convertTime / 60) + "m ago";
    } else if (convertTime < (60 * 60 * 24) && convertTime >= (60 * 60)) {
      resultTime = Math.floor(convertTime / (60 * 60)) + "h ago";
    } else if (convertTime < (60 * 60 * 24 * 7) && convertTime >= (60 * 60 * 24)) {
      resultTime = Math.floor(convertTime / (60 * 60 * 24));
      if (resultTime < 2) {
        resultTime = "1 day ago"
      } else {
        resultTime = Math.floor(convertTime / (60 * 60 * 24)) + " days ago";
      }
    } else if (convertTime < 2628000 && convertTime >= (60 * 60 * 24 * 7)) {
      resultTime = Math.floor(convertTime / (60 * 60 * 24 * 7));
      if (resultTime < 2) {
        resultTime = "1 week ago"
      } else {
        resultTime = Math.floor(convertTime / (60 * 60 * 24 * 7)) + " weeks ago";
      }
    } else if (convertTime < 31540000 && convertTime >= 2628000) {
      resultTime = Math.floor(convertTime / 2628000);
      if (resultTime < 2) {
        resultTime = "1 month ago"
      } else {
        resultTime = Math.floor(convertTime / (2628000)) + " months ago";
      }
    } else if (convertTime >= 31540000) {
      resultTime = Math.floor(convertTime / 31540000);
      if (resultTime < 2) {
        resultTime = "1 year ago"
      } else {
        resultTime = Math.floor(convertTime / (31540000)) + " years ago";
      }
    } else {
      resultTime = "recently posted"
    }
    return resultTime
  }

  postComment = (e) => {
    e.preventDefault()
    Axios.post(`http://localhost:8080/videos/${e.target.id}/comments`, {
      name: "User",
      comment: e.target[`new-comment-input`].value,
      id: Nanoid(),
      likes: 0,
      timestamp: Date.now()
    })
      .then(res => {
        let commentArray = Array.from(this.state.postCommentArray)
        commentArray.push(res.data)
        this.setState({
          postCommentArray: commentArray
        })
      })
      .catch(err => {
        console.log(err)
      })
    e.target[`new-comment-input`].value = ""
  }

  deleteComment = (e) => {
    Axios.delete(`http://localhost:8080/videos/${this.state.mainVideoData.id}/comments/${e.target.value}`)
      .then(res => {
        this.setState({
          postCommentArray: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.initialApiData()
  }

  componentDidUpdate() {
    if ((this.state.mainVideoData.id !== this.props.match.params.vidId) && this.props.match.params.vidId) {
      Axios.get(`http://localhost:8080/videos/${this.props.match.params.vidId}`)
        .then(res => {
          this.setState({
            mainVideoData: res.data,
            postCommentArray: res.data.comments
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    if (!this.state.videoListData || !this.state.mainVideoData) {
      return (
        <>
        </>
      )
    }

    let updateList = this.state.videoListData.filter(index => {
      return (index.id !== this.state.mainVideoData.id)
    })

    return (
      <>
        <MainVideo {...this.state.mainVideoData} />
        <div className="main-body">
          <CurrentVideoInfo {...this.state.mainVideoData} dynamicTimestamp={this.dynamicTimestamp} postComment={this.postComment} postCommentArray={this.state.postCommentArray} deleteComment={this.deleteComment} />
          <AsideVideos updateList={updateList} />
        </div>
      </>
    )
  }
}