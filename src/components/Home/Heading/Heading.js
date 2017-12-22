import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './Heading.css'

class Heading extends Component {
  componentDidMount() {
    document.getElementById('heading').className += ' heading--show'
  }

  render() {
    return (
      <div className="heading" id="heading">
        <Tilt className="heading__tilt Tilt" options={{ max : 20, speed: 700, scale: 1, perspective: 800 }}>
          <h1 className="heading__text Tilt-inner">Simon Evans</h1>
        </Tilt>
      </div>
    )
  }
}

export default Heading
