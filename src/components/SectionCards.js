import React, { Component } from 'react'
import { getVideos } from '../config/MainConfig'
import SectionCard from './SectionCard'

export class SectionCards extends Component {
  state={
    videos: []
  }

  componentDidMount(){
    getVideos()
    .then(resp=>{
      return (
        this.setState({
          videos: resp
        })
      )
    })
  }
  render() {
    const {videos}=this.state
    return (
      <div className='cards_container'>
        {
          videos.map((video,i)=>{
            return <SectionCard video={video} key={i} />
          })
        }
        
        {/* <SectionCard/>
        <SectionCard/> */}
      </div>
    )
  }
}

export default SectionCards