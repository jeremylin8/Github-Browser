import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Repodetails from './components/RepoDetails';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/:id' component={Repodetails} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
