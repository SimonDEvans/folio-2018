import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './Heading.css'

class Heading extends Component {
  componentDidMount() {
    document.getElementById('heading').className += ' heading--show'
    let headingStrapline = document.getElementById('heading-strapline')
    let colourUpdate = 0

    function updateColour() {
      headingStrapline.style.color = "hsla(" + (colourUpdate % 360) + ", 100%, 50%, 1)"
      colourUpdate -= 0.5
    }

    setInterval(updateColour, 60)
  }

  render() {
    return (
      <div className="heading" id="heading">
        <Tilt className="heading__tilt Tilt" options={{ max : 15, speed: 2500, scale: 1, perspective: 400 }}>
          <h1 className="heading__text Tilt-inner">
            Simon Evans
            <span id="heading-strapline" data-text="Front-end/UI Developer">Front-end/UI Developer</span>
          </h1>
        </Tilt>
      </div>
    )
  }
}

export default Heading
