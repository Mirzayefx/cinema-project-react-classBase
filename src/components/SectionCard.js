import React, { Component } from 'react'
// import Video from '../videos/video.mp4'
export class SectionCard extends Component {
  render() {
    const {video}=this.props
    return (
      <div className='continue_card'>
        <video src={video.video} controls>

        </video>
        <p>Lorem ipsum dolo</p>
      </div>
    )
  }
}

export default SectionCard