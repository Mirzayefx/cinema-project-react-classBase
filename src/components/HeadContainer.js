import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeadIcons from './HeadIcons'
import Logo from './Logo'
import Nav from './Nav'

export class HeadContainer extends Component {
  render() {
    return (
      <div className='head_container'>
        <div className="nav_logo">
        <Link to='/'><Logo/></Link>
        </div>
        <Nav/>
        <HeadIcons/>
      </div>
    )
  }
}

export default HeadContainer