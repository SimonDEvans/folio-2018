import React, { Component } from 'react'
import './AboutLink.css'
import { Parallax } from 'react-scroll-parallax'

class AboutLink extends Component {
  render() {
    return (
      <Parallax className="about-link-container" offsetYMin={-2000}>
        <div className="about-link">About</div>
      </Parallax>
    )
  }
}

export default AboutLink
