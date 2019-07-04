import React from 'react';
import NavBar from './NavBar';
import Keg from './Keg';

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <style jsx>{`

      `}</style>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Keg}/>
      </Switch>
    </div>
  );
}

export default App;