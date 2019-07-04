import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import KegList from './KegList';

import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <style jsx>{`

      `}</style>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/keglist' component={KegList}/>
      </Switch>
    </div>
  );
}

export default App;