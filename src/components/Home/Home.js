import React, { Component } from 'react'
import './Home.css'
import TestComponent from '../../components/TestComponent/TestComponent'

class Home extends Component {
  render() {
    return (
      <div>
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
