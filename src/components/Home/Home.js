import React, { Component } from 'react'
import './Home.css'
import Introduction from './Introduction/Introduction'
import Splash from '../Splash/Splash'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Introduction />
        <Splash />
      </div>
    )
  }
}

export default Home
