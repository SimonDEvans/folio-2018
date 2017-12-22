import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <button className="menu-link" id="menu-link">
        <span className="menu-link__label">Menu</span>
        <div className="menu-link__wrapper">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    )
  }
}

export default Menu
