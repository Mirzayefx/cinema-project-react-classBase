import React, { Component } from 'react'
import FootApp from '../components/FootApp'
import FooterContainer from '../components/FooterContainer'
import HeadContainer from '../components/HeadContainer'
import MovieContainer from '../components/MovieContainer'
import SectionTopicLine from '../components/SectionTopicLine'
import SliderContainer from '../components/SliderContainer'
import VideosCastContainer from '../components/VideosCastContainer'
import { getList } from '../config/MainConfig'

export class Main extends Component {
  state = {
    myList: [],
  }
  componentDidMount(){
    getList()
    .then(resp=>{
      return (
      this.setState({
        myList: resp.results
      }) 
      ) 
    })
  }
  render() {
    const {myList}= this.state
    return (
      <>
      <header>
        <div className="container">
            <HeadContainer/>
            <h2 className='movie_topic'>Kimi (HBO Max)</h2>
            <MovieContainer/>
        </div>
      </header>
      <main style={{padding: "0"}}>
        <section>
          <div className="container">
            <VideosCastContainer/>
          </div>  
        </section>

        <section className='mylist_container'>
          <div className="container">
            <SectionTopicLine sectionHeader="My list"/>
          </div>
          <SliderContainer moviesPoster={myList}/>
        </section>
      </main>

      <footer>
        <section>
          <div className="container">
            <FooterContainer/>
            <FootApp/>
          </div>
        </section>
      </footer>
      </>
    )
  }
}

export default Main