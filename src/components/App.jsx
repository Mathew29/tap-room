import React from 'react';
import NavBar from './NavBar';
import KegList from './KegList';

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <style jsx>{`

      `}</style>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={KegList}/>
      </Switch>
    </div>
  );
}

export default App;