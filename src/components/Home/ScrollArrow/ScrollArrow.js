import React, { Component } from 'react'
import './ScrollArrow.css'
import { Parallax } from 'react-scroll-parallax'
import Scrollchor from 'react-scrollchor'

class ScrollArrow extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('scroll-arrow').className += ' scroll-arrow--show'
    }, 700);
  }

  render() {
    return (
      <Parallax className="scroll-arrow-container" offsetYMin={-1500}>
        <Scrollchor to="#about" animate={{offset: -100, duration: 800}} id="scroll-arrow" className="scroll-arrow">
          <span></span>
        </Scrollchor>
      </Parallax>
    )
  }
}

export default ScrollArrow
