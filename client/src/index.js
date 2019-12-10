// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// styles & assets
import './index.scss';

// pages
import Landing from './pages/Landing';
import Drink from './pages/Drink';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Creations from './pages/Creations';

// render
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/catalog" exact component={Catalog} />
      <Route path="/favorites" exact component={Favorites} />
      <Route path="/creationspage" exact component={Creations} />
      <Route path="/:drinkName" exact component={Drink} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));