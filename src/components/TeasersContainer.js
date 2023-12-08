import React, { Component } from 'react'
import { getTeasers } from '../config/MainConfig'
import Teaser from './Teaser'

export class TeasersContainer extends Component {
  state ={
    video: []
  }
  componentDidMount(){
    getTeasers()
    .then(resp=>{
      return (
        this.setState({
        video: resp
      })
      )
    })
  }
  render() {
    const {video} = this.state
    return (
      <div className='teasers_container'>
        <h4 className='trailer_topic'>VIDEOS:TRAILERS,TEASERS,FEATURETTES</h4>
        <div className="teasers_grid">
          {
            video.map((video,i)=>{
              return <Teaser teaser={video} key={i} />
            })
          }
        </div>
      </div>
    )
  }
}

export default TeasersContainer