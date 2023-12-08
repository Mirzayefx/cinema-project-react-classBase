import React, { Component } from 'react'

export class CastContent extends Component {
  render() {
    const {castPhoto} = this.props
    return (
        <div className="cast_content">
        <img src={castPhoto} alt="castPhoto" />
        <div className="cast_fname">
            <span className="fname_red">Zoë Kravitz</span>
            <span>as Angela Childs</span>
        </div>
    </div>
    )
  }
}

export default CastContent