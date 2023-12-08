import React, { Component } from 'react'
import SliderInnerCard from './SliderInnerCard'

export class SliderContainer extends Component {
  state = {
    container: React.createRef(),
    count: 0
  }
  carousel(){
    let container = this.state.container.current
    for(let i = 0; i < container.children.length; i++){
      container.children[i].style.transform = `translateX(${-300*this.state.count}px)`
    }
  }
  componentDidMount(){
    let container = this.state.container.current
    let newCount = this.state.count
    setInterval(() => {
      if(newCount<container.children.length-4){
        newCount++;
        this.carousel()
      }else{
        newCount=0
        this.carousel()
      }
      this.setState({
        count: newCount
      })
      this.carousel()
    }, 3000);
  }
  leftHandler=()=>{
    let newCount = this.state.count
    if(newCount>0){
      newCount--
      this.carousel()
    }else{
      newCount=0
      this.carousel()
    }
    this.setState({
      count: newCount
    })
  }
  rightHandler=()=>{
    let container = this.state.container.current
    let newCount = this.state.count
    if(newCount<container.children.length-4){
        newCount++;
        this.carousel()
      }else{
        newCount=0
        this.carousel()
      }
      this.setState({
        count: newCount
      })
     
  }
  render() {
    const { container } = this.state
    const {moviesPoster}= this.props
    return (
      <div className='slider_container'>
        <i onClick={this.leftHandler.bind(this)} className="fa-solid fa-chevron-left"></i>
        <div className='slider_inner_container' ref={container}>
        {
          moviesPoster.map((poster,i)=>{
            return <SliderInnerCard poster={poster} key={i}/>
          })
        }
      </div>
        <i onClick={this.rightHandler.bind(this)} className="fa-solid fa-chevron-right"></i>
      </div>
    )
  }
}

export default SliderContainer