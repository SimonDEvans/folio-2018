import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { ParallaxProvider } from 'react-scroll-parallax';
import Base from './components/Base/Base'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'

const Container = (props) => props.children

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Base} />
              <Route path='about' component={About} />
              <Route path='*' component={NotFound} />
            </Route>
          </Router>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App
