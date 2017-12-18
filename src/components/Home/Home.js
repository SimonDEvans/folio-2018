import React, { Component } from 'react'
import './Home.css'
import Introduction from './Introduction'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Introduction />
      </div>
    )
  }
}

export default Home
