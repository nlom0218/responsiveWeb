import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FluidGrid from './Pages/Chpater1/FluidGrid';
import MediaQuery from './Pages/Chpater1/MediaQuery';
import Viewport from "./Pages/Chpater1/Viewport"
import FluidMargin from './Pages/Chpater2/2-2';
import FluidGrid2 from './Pages/Chpater2/FluidGrid2';
import MediaQuery2 from './Pages/Chpater3/MediaQuery2';
import Flexalbe from './Pages/Chpater4/Flexable';
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
        <Route path="/2-2"><FluidMargin /></Route>
        <Route path="/3-1"><MediaQuery2 /></Route>
        <Route path="/4-1"><Flexalbe /></Route>
      </Switch>
    </Router>
  </React.StrictMode>);
}

export default App;
