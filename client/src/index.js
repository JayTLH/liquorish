// packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// styles
import './index.scss'

// pages
import Home from './pages/LandingPage'

// render
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" exact component={Home} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));