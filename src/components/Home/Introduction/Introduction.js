import React, { Component } from 'react'
import { Link } from 'react-router'
import './Introduction.css'

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <h1 className="animate-in">Dipsum sipsum</h1>
        <h2 className="animate-in">
          Lorem ipsum dolor sit amet.
        </h2>
        <h2 className="animate-in">
          <Link to='/about'>Page link.</Link>
        </h2>
      </div>
    )
  }
}

export default Introduction
