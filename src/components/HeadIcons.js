import React, { Component } from 'react'

export class HeadIcons extends Component {
  render() {
    return (
      <div className="head_icons">
        <i className="fas fa-search"></i>
        <input type="text" placeholder='Search For Movies...' />
        <i className="fas fa-bell"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    )
  }
}

export default HeadIcons