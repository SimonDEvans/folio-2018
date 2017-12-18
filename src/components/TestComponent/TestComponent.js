import React, { Component } from 'react'
import './TestComponent.css'
import { Parallax } from 'react-scroll-parallax';

class TestComponent extends Component {
  render() {
    return (
      <Parallax
        className="test-component"
        offsetYMax={-40}
        offsetYMin={20}
        >
      </Parallax>
    )
  }
}

export default TestComponent