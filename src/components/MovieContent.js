import React, { Component } from "react";
import MovieContentBtnsRow from "./MovieContentBtnsRow";
import MovieContentRow from "./MovieContentRow";

export class MovieContent extends Component {
  render() {
    return (
      <div className="movie_content_container">
        <MovieContentRow />
        <p>
          Angela suffers from a fear of open spaces, which is exacerbated by the
          general lockdown, so she works from home. Her job is to process the
          erroneous responses of Kimi's trendy voice assistant.She reports the
          incident to her superior, who refers her to Natalie Chowdhury, an
          executive at Amygdala. Angela attempts to reach Chowdhury over the
          phone, but is eventually convinced to come to her office in person,
          with the promise that the FBI will be informed about the case. At the
          office, Angela is disturbed when Chowdhury seems reticent to contact
          the authorities and makes reference to her prior mental health
          leave...{" "}
        </p>
        <MovieContentBtnsRow/>
      </div>
    );
  }
}

export default MovieContent;
