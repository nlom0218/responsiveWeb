import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FluidGrid from './Pages/Chpater1/FluidGrid';
import { GlobalStyle } from './styles';

const App = () => {
  return (<React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="fluidGrid"><FluidGrid /></Route>
      </Switch>
    </Router>
  </React.StrictMode>);
}

export default App;
