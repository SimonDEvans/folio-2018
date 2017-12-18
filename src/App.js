import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import TestComponent from './components/TestComponent/TestComponent'

const Container = (props) => props.children

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='test-component' component={TestComponent} />
              <Route path='*' component={NotFound} />
            </Route>
          </Router>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
