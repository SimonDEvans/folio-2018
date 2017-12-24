import React, { Component } from 'react'
import './Home.css'
import Splash from './Splash/Splash'
import Social from './Social/Social'
import Menu from './Menu/Menu'
import Heading from './Heading/Heading'
import About from '../../components/About/About'
import AboutLink from './AboutLink/AboutLink'
import WorkLink from './WorkLink/WorkLink'
import ScrollArrow from './ScrollArrow/ScrollArrow'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <ScrollArrow />
          <Heading />
          <Splash />
          <Social />
          <AboutLink />
          <WorkLink />
          <Menu />
        </div>
        <About />
      </div>
    )
  }
}

export default Home
