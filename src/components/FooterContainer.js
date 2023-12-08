import React, { Component } from 'react'
import FootLinks from './FootLinks'
import FootNav from './FootNav'
import Logo from './Logo'

export class FooterContainer extends Component {
  render() {
    return (
      <div className='foot_container'>
            <Logo/>
            <FootNav/>
            <FootLinks/>
      </div>
    )
  }
}

export default FooterContainer