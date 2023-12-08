import React, { Component } from 'react'
import RedLine from "../images/red-line.png"

export class SectionTopicLine extends Component {
  render() {
    const {sectionHeader}=this.props
    return (
      <div className='line_container'>
        <h2>{sectionHeader}</h2>
        <img src={RedLine} alt="red-line" /> 
      </div>
    )
  }
}

export default SectionTopicLine