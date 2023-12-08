import React, { Component } from 'react'

export class FootLinks extends Component {
  render() {
    return (
      <div className='link_container'>
        <a href='#' className='icon_shadow'><i className="fab fa-youtube"></i></a>
        <a href='#' className='icon_shadow'><i className="fab fa-instagram"></i></a>
        <a href='#' className='icon_shadow'><i className="fab fa-facebook-f"></i></a>
        <a href='#' className='icon_shadow'><i className="fab fa-twitter"></i></a>
      </div>
    )
  }
}

export default FootLinks