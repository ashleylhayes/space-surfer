import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpaceSurfer from '../src/components/SpaceSurfer/SpaceSurfer';
import Model3D from '../src/components/Model3D/Model3D';
import CardGame from '../src/components/CardGame/CardGame'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CardGame} />
          <Route path="/learn/:id" render={(routeProps) => <SpaceSurfer {...routeProps} />} />
          <Route path="/model/:id" render={(routeProps) => <Model3D {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
