import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.css'

class Introduction extends Component {
  render() {
    return (
      <div className="home__introduction">
        <h1 className="animate-in">Hello.</h1>
        <h2 className="animate-in">
          Lorem ipsum dolor sit amet.
        </h2>
        <h2 className="animate-in">
          <Link to='/about'>Go to about page.</Link>
        </h2>
      </div>
    )
  }
}

export default Introduction
