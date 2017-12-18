import React, { Component } from 'react'
import './Base.css'
import Home from '../../components/Home/Home'

class Base extends Component {
  componentDidMount() {
    function animateIn(el, className, timing) {
      for (let i = 0; i < el.length; i++) {
        (function (i) {
          setTimeout(function () {
            el[i].className += className
          }, timing * i)
        })(i)
      }
    }

    let items = document.getElementById('base').querySelectorAll('.animate-in');  
    setTimeout(function() {
      animateIn(items, ' animate-in--show', 500);
    }, 100)
  }

  render() {
    return (
      <div id="base">
        <Home />
      </div>
    )
  }
}

export default Base
