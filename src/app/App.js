import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Home from '../components/Home/Home'
import Error404 from '../components/Error404/Error404'
import About from '../components/About/About'

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/#/" component={Home}/>
                <Route exact path="" component={Home}/>
                <Route path="/about" component={About}/>
                <Route component={Error404} />
              </Switch>
            </div>
          </Router>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App
