import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpaceSurfer from '../src/components/SpaceSurfer/SpaceSurfer';
import Model3D from '../src/components/Model3D/Model3D';
import ImagePuzzle from '../src/components/ImagePuzzle/ImagePuzzle';
import TitleScreen from '../src/components/TitleScreen/TitleScreen';
import Trivia from '../src/components/Trivia/Trivia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TitleScreen} />
          <Route path="/learn/:id" render={(routeProps) => <SpaceSurfer {...routeProps} />} />
          <Route path="/model/:id" render={(routeProps) => <Model3D {...routeProps} />} />
          <Route path="/puzzle" component={ImagePuzzle} />
          <Route path="/trivia" component={Trivia} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
