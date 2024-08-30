import React from 'react';
import './index.css';
import {Route,Switch } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import Header from './components/header/Header';
import ValidatePage from './pages/ValidatePage';
import ExperimentPage from './pages/ExperimentPage';
import DevelopmentPage from './pages/DevelopMentPage';
class App extends React.Component{
  render(){
   return (
    <div >
      <Header />
      <Switch>
        <Route exact component={AboutPage} path='/about'/>
        <Route exact component={ExperimentPage} path='/experiment'/>
        <Route exact component={ValidatePage} path='/validate-concept'/>
        <Route exact component={HomePage} path='/'/>
        <Route exact component={DevelopmentPage}/>
      </Switch>
      
    </div>
  );
  }
}
export default App;
