// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.scss' // scss

// pages
import Home from './pages/LandingPage';

// components
// import Navbar from './components/Navbar';

// render
ReactDOM.render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));