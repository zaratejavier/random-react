import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import NavBar from "./components/NavBar";
import Shawn from "./components/Shawn";
import Javier from "./components/Javier";
import Joey from "./components/Joey";

import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Container>
    <Switch>
    <Route exact path='/Shawn' component={Shawn} />
    <Route exact path='/Javier' component={Javier} />
    <Route exact path='/Joey' component= {Joey} />
    </Switch>
    </Container>
      
    </>

  );
}

export default App;
