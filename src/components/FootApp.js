import React, { Component } from 'react'
import GooglePlay from "../images/gplay.png";
import AppStore from "../images/appstore.png";
export class FootApp extends Component {
  render() {
    return (
      <div className='app_container'>
        <a href="#"><img src={GooglePlay} alt="Google Play" /></a>
        <a href="#"><img src={AppStore} alt="App Store" /></a>
      </div>
    )
  }
}

export default FootApp