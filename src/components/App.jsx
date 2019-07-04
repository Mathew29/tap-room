import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import AboutUs from './AboutUs';


import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <style jsx>{`
        background-color: #deb887;
        background-size: 200%;
        padding-bottom: 100%;
      `}</style>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/keglist' component={KegList}/>
        <Route path='/addkeg' component={AddKeg}/>
        <Route path='/editkeg' component={EditKeg}/>
        <Route path='/aboutus' component={AboutUs}/>>
      </Switch>
    </div>
  );
}

export default App;