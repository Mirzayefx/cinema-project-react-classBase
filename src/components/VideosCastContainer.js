import React, { Component } from 'react'
import CastContainer from './CastContainer'
import TeasersContainer from './TeasersContainer'

export class VideosCastContainer extends Component {
  render() {
    return (
        <div className='videos_cast_container'>
        <CastContainer/>
        <TeasersContainer/>
      </div>
    )
  }
}

export default VideosCastContainer