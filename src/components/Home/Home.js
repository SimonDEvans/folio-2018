import React, { Component } from 'react'
import './Home.css'
import Splash from '../Splash/Splash'
import Social from '../Social/Social'
import Playground from '../Playground/Playground'
import Menu from '../Menu/Menu'

class Home extends Component {
  componentDidMount() {
    setTimeout(function() {
      document.getElementById('strapline').className += 'show'
    }, 100)
  }

  render() {
    return (
      <div className="home">
        <h1 id="strapline">Simon Evans</h1>
        <Splash />
        <Social />
        <Playground />
        <Menu />
      </div>
    )
  }
}

export default Home
