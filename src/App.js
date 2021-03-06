import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        <Route path='/dialogItem'
               render={() => <DialogsContainer/>}/>
        <Route path='/profile'
               render={() => <Profile/>}/>
        <Route path='/news' render={News}/>
        <Route path='/music' render={Music}/>
        <Route path='/settings' render={Settings}/>
      </div>
    </div>
  );
}

export default App;
