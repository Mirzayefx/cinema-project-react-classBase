import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
        <nav>
            <ul className='nav_list'>
                <li><a href="#">Tv Shows</a>
                <div className="dropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </li>

                <li><a href="#">Movies</a>
                <div className="dropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </li>
                
                <li><a href="#">Upcoming</a>
                <div className="dropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </li>

                <li><a href="#">Trailers</a>
                <div className="dropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </li>

                <li><a href="#">My list</a>
                <div className="dropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </li>

            </ul>
        </nav>
    )
  }
}

export default Nav