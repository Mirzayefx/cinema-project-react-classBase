import React, { Component } from 'react'
import MovieContent from './MovieContent'
import MovieInstructions from './MovieInstructions'

export class MovieContainer extends Component {
  render() {
    return (
      <div className='movie_container'>
        <MovieInstructions/>
        <MovieContent/>
      </div>
    )
  }
}

export default MovieContainer