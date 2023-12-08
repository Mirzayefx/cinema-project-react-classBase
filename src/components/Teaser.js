import React, { Component } from 'react'

export class Teaser extends Component {
  render() {
    const {teaser} = this.props
    return (
      <div className='teaser_card'>
        <video src={teaser.video} poster="https://i.ibb.co/ZXF6KxY/teaser-poster.png" controls ></video>
      </div>
    )
  }
}

export default Teaser