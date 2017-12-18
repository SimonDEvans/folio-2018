import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/test-component'>Test Component</Link>
      </div>
    )
  }
}

export default Home
