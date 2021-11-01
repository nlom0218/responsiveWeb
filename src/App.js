import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import { GlobalStyle } from './styles';

const App = () => {
  return (<React.StrictMode>
    <GlobalStyle />
    <Router basename="https://nlom0218.github.io/responsiveWeb">
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
  </React.StrictMode>);
}

export default App;
