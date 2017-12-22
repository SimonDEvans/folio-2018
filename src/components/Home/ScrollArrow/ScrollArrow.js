import React, { Component } from 'react'
import './ScrollArrow.css'
import { Parallax } from 'react-scroll-parallax';

class ScrollArrow extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('scroll-arrow').className += ' scroll-arrow--show'
    }, 700);
  }

  render() {
    return (
      <Parallax className="scroll-arrow-container" offsetYMin={-600}>
        <div id="scroll-arrow" className="scroll-arrow">
          <span></span>
        </div>
      </Parallax>
    )
  }
}

export default ScrollArrow
