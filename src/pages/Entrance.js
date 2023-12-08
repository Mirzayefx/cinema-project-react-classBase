import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export class Entrance extends Component {
  render() {
    return (
      <div className='entrance_container'>
        <div className="bg_shadow">
        <div className="logo_container">
        <Logo/>
        </div>
        <div className="login_register_btns">
            <Link to={"/login"}><button className='ent_login_btn'>Login</button></Link>
            <Link to={"/register"}><button className='ent_reg_btn'>Sign up</button></Link>
        </div>
        </div>

      </div>
    )
  }
}

export default Entrance