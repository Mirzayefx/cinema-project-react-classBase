import React, { Component } from 'react'

export class FootNav extends Component {
  render() {
    return (
        <nav>
            <ul className='foot_nav'>
                <li><a href="#a">Tv Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Upcoming</a></li>
                <li><a href="#">Trailers</a></li>
                <li><a href="#">My list</a></li>
            </ul>
        </nav>
    )
  }
}

export default FootNav