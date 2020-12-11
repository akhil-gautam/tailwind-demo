import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Instagram from './InstagramClone/components';
import FBClone from './FBClone/components';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/instagram">
          <Instagram />
        </Route>
        <Route path="/fb">
          <FBClone />
        </Route>
        <Redirect exact from="/" to="instagram" />
      </Switch>
    </Router>
  );
};

export default App;
