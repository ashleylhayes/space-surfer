import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpaceSurfer from '../src/components/SpaceSurfer/SpaceSurfer';
import Model3D from '../src/components/Model3D/Model3D';
import ImagePuzzle from '../src/components/ImagePuzzle/ImagePuzzle';
import TitleScreen from '../src/components/TitleScreen/TitleScreen';
import Trivia from '../src/components/Trivia/Trivia';
import Memory from '../src/components/Memory/Memory';
import PhotoOfDay from '../src/components/PhotoOfDay/PhotoOfDay';
import LearnMenu from '../src/components/LearnMenu/LearnMenu';
import PlayMenu from '../src/components/PlayMenu/PlayMenu';

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
          <Route path="/memory" component={Memory} />
          <Route path="/photo" component={PhotoOfDay} />
          <Route path="/menu/learn" component={LearnMenu} />
          <Route path="/menu/play" component={PlayMenu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
