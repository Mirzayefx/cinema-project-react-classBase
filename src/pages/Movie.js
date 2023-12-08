import React, { Component } from "react";
import FootApp from "../components/FootApp";
import FooterContainer from "../components/FooterContainer";
import HeadContainer from "../components/HeadContainer";
import HeadContent from "../components/HeadContent";
import LoadMore from "../components/LoadMore";
import SectionCards from "../components/SectionCards";
import SectionLinkContainer from "../components/SectionLinkContainer";
import SectionTopicLine from "../components/SectionTopicLine";
import SliderContainer from "../components/SliderContainer";
import { getAction, getComedies, getPopular } from "../config/MainConfig";

export class Movie extends Component {
  state={
    popularMovies: [],
    comedyMovies: [],
    actionMovies: []
  }
  componentDidMount(){
    getPopular()
    .then(resp=>{
      return (
        this.setState({
          popularMovies: resp.results
        })
      )
    })

    getComedies()
    .then(resp=>{
      return (
        this.setState({
          comedyMovies: resp.results
        })
      )
    })

    getAction()
    .then(resp=>{
      this.setState({
        actionMovies: resp.results
      })
    })
  }
  render() {
    const {popularMovies, comedyMovies, actionMovies}= this.state
    return (
      <>
        <header>
          <div className="head_bg">
            <div className="head_shadow">
              <div className="container">
                <HeadContainer />
                <HeadContent />
              </div>
            </div>
          </div>
        </header>

        <main>
          <section>
            <div className="container">
              <SectionTopicLine sectionHeader="Continue Watching" />
              <SectionLinkContainer />
              <SectionCards />
            </div>
          </section>

          <section>
            <div className="container">
              <SectionTopicLine sectionHeader="Popular Movies 2022"/>
              <SectionLinkContainer />
            </div>
            <SliderContainer moviesPoster={popularMovies} />
            <LoadMore/>
          </section>
          <section>
            <div className="container">
              <SectionTopicLine sectionHeader="Best Comedies"/>
              <SectionLinkContainer />
            </div>
            <SliderContainer moviesPoster={comedyMovies}/>
            <LoadMore/>
          </section>
          <section>
            <div className="container">
              <SectionTopicLine sectionHeader="Action & Adventure"/>
              <SectionLinkContainer />
            </div>
            <SliderContainer moviesPoster={actionMovies}/>
            <LoadMore/>
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
    );
  }
}

export default Movie;
