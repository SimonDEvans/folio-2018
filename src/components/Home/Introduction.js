import React, { Component } from 'react'
import './Home.css'

class Introduction extends Component {
  render() {
    return (
      <div className="home__introduction">
        <h1 className="animate-in">Hello.</h1>
        <h2 className="animate-in">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
    )
  }
}

export default Introduction
