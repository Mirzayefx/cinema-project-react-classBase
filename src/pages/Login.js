import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export class Login extends Component {
  render() {
    return (
      <div className='login_container'>
        <Logo/>
        <h1 className='login_topic'>LOGIN</h1>
        <form className='login_form'>
          <label htmlFor="log_email">Email</label>
          <input id='log_email' className='log_reg_inp' type="email" placeholder='Enter your email' />
          <label htmlFor="log_pass">Password</label>
          <input id='log_pass' className='log_reg_inp' type="password" placeholder='Enter your password' />
          <Link to={"/register"}><span className='go_register'>Forgot password?</span></Link>
          <button className='ent_login_btn login_btn'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login