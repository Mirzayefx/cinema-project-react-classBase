import React, { Component } from 'react'

export class MovieContentRow extends Component {
  render() {
    return (
      <div className='movie_content_row'>
        <span className='content_row_active'>SUBTITLE</span>
        <span>DUBLAJ</span>
        <span>CINEMA MOOD</span>   
      </div>
    )
  }
}

export default MovieContentRow