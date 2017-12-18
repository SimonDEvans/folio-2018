import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import TestComponent from '../../components/TestComponent/TestComponent'

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="block"></div>
        <div className="block2"></div>
        <TestComponent />
        <div className="block"></div>
        <div className="block2"></div>
        <div className="block"></div>
        <div className="block2"></div>
      </div>
    )
  }
}

export default Home
