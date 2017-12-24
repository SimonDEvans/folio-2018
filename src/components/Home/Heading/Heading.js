import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './Heading.css'

class Heading extends Component {
  componentDidMount() {
    setTimeout(function() {
      document.getElementById('heading').className += ' heading--show'
      let headingStrapline = document.getElementById('heading__text')

      // Start colour
      let colourUpdate = 285

      function updateColour() {
        headingStrapline.style.color = "hsla(" + (colourUpdate % 360) + ", 100%, 50%, 0.8)"
        colourUpdate -= 0.5
        console.log(colourUpdate)
      }

      setInterval(updateColour, 60)
    }, 700);
  }

  render() {
    return (
      <div className="heading" id="heading">
        <Tilt className="heading__tilt Tilt" options={{ max : 15, speed: 2500, scale: 1, perspective: 400 }}>
          <h1 data-text="Front-end/UI Developer" data-text="Simon Evans" id="heading__text" className="heading__text Tilt-inner">
            Simon Evans
            <span id="heading-strapline" data-text="Front-end/UI Developer">Front-end/UI Developer</span>
          </h1>
        </Tilt>
      </div>
    )
  }
}

export default Heading
