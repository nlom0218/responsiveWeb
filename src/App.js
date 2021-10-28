import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FluidGrid from './Pages/Chpater1/FluidGrid';
import Viewport from "./Pages/Chpater1/Viewport"
import Home from './Pages/Home';
import { GlobalStyle } from './styles';

const App = () => {
  return (<React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/fluidGrid"><FluidGrid /></Route>
        <Route path="/viewport"><Viewport /></Route>
      </Switch>
    </Router>
  </React.StrictMode>);
}

export default App;
