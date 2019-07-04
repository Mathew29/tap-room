import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import background from '../assets/images/backgroundBeach.jpg';

import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <style jsx>{`
        background: url(${background});
        background-size: 200%;
        padding-bottom: 100%;
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