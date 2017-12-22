import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './Home.css'
import Splash from './Splash/Splash'
import Social from './Social/Social'
import Menu from './Menu/Menu'

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('home-heading').className += ' home__heading--show'
    }, 100);
  }

  render() {
    return (
      <div className="home">
        <div className="home__heading" id="home-heading">
          <Tilt className="home__heading-tilt Tilt" options={{ max : 20, speed: 700, scale: 1, perspective: 500 }}>
            <h1 className="home__heading-text Tilt-inner">Simon Evans</h1>
          </Tilt>
        </div>
        <Splash />
        <Social />
        <Menu />
      </div>
    )
  }
}

export default Home
