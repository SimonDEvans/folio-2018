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

    let items = document.getElementById('animate-base').querySelectorAll('.animate-in')
    let UIitems = document.getElementById('animate-base').querySelectorAll('.animate-in-ui')
    let sidebars = document.getElementById('animate-base')
    setTimeout(function() {
      animateIn(items, ' animate-in--show', 200);
      animateIn(UIitems, ' animate-in-ui--show', 200);
    }, 100)

    setTimeout(function() {
      sidebars.className += ' base--show'
    }, 1500)
  }

  render() {
    return (
      <div className="base" id="animate-base">
        <Home />
      </div>
    )
  }
}

export default Base
