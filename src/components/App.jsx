import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import Admin from './Admin';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import AboutUs from './AboutUs';
import { v4 } from 'uuid';
import Error404 from './Error404';

import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, { [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
  }

  render() {
    return (
      <div>
        <style jsx>{`
          background-color: #deb887;
          background-size: 200%;
          padding-bottom: 100%;
        `}</style>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={() => <MainPage />} />
          <Route path='/keglist' render={() => <KegList kegList={this.state.masterKegList} /> } />
          <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}  onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg} /> } />
          <Route path='/addkeg' render={()=> <AddKeg onNewKegCreation={this.handleAddingNewKegToList} /> } />
          <Route path='/editkeg' component={EditKeg}/>
          <Route path='/aboutus' component={AboutUs}/>>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;