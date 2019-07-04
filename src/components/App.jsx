import React from 'react';
import NavBar from './NavBar';

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <style jsx>{`

      `}</style>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={}/>
      </Switch>
    </div>
  );
}

export default App;