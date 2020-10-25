import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpaceSurfer from '../src/components/SpaceSurfer/SpaceSurfer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SpaceSurfer} />
          <Route path="/:id" render={(routeProps) => <SpaceSurfer {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
