import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import KegList from './KegList';
import AddKeg from './AddKeg';

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
        <Route path='/addkeg' component={AddKeg}/>
      </Switch>
    </div>
  );
}

export default App;