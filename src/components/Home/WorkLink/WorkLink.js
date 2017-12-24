import React, { Component } from 'react'
import './WorkLink.css'
import { Parallax } from 'react-scroll-parallax'

class WorkLink extends Component {
  render() {
    return (
      <Parallax className="work-link-container" offsetYMin={-2000}>
        <div className="work-link">Work</div>
      </Parallax>
    )
  }
}

export default WorkLink
