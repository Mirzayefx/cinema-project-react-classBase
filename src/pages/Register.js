import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export class Register extends Component {
  render() {
    return (
      <div className='register_container'>
        <Logo/>
        <h1 className='register_topic'>SIGN UP</h1>
        <form className='register_form'>
        <label htmlFor="reg_name">Full Name</label>
          <input id='reg_name' className='log_reg_inp' type="text" placeholder='Enter your full name' />
          <label htmlFor="reg_email">Email</label>
          <input id='reg_email' className='log_reg_inp' type="email" placeholder='Enter your email' />
          <label htmlFor="reg_pass">Password</label>
          <input id='reg_pass' className='log_reg_inp' type="password" placeholder='Enter your password' />
          <label htmlFor="reg_rpass">Re-type Password</label>
          <input id='reg_rpass' className='log_reg_inp' type="password" placeholder='Enter your password again' />
          <Link to={"/login"}><span className='go_login'>Already have an account?</span></Link>
          <button className='ent_reg_btn reg_btn'>Sign up</button>
        </form>
      </div>
    )
  }
}

export default Register