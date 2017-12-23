import React, { Component } from 'react'
import './About.css'
import Waypoint from 'react-waypoint'

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <Waypoint 
          onEnter={() => { document.getElementById('about').className += ' about--show' }}
          onLeave={() => { document.getElementById('about').className = 'about' }}
        />
        <article className="article">
          <h1>Front-end/UI Developer based in Bristol, UK.</h1>
          <p>I produce elegant, performant, and accessible digital experiences.</p>
          <p>Currently working as a Senior Front-end Developer at Torchbox.</p>
        </article>
      </div>
    )
  }
}

export default About
