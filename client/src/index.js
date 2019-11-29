// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles & assets
import './index.scss';

// pages
import Home from './pages/LandingPage';
import Drink from './pages/DrinkPage';

// components
import NavMenu from './components/NavMenu';

// render
ReactDOM.render(
  <BrowserRouter>
    <NavMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:drinkName" exact component={Drink} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));