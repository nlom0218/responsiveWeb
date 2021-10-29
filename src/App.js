import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FluidGrid from './Pages/Chpater1/FluidGrid';
import MediaQuery from './Pages/Chpater1/MediaQuery';
import Viewport from "./Pages/Chpater1/Viewport"
import FluidGrid2 from './Pages/Chpater2/FluidGrid2';
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
        <Route path="/mediaQuery"><MediaQuery /></Route>
        <Route path="/fluidGrid2"><FluidGrid2 /></Route>
      </Switch>
    </Router>
  </React.StrictMode>);
}

export default App;
