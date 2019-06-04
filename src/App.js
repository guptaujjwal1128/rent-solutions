import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Logout from './pages/Logout';
import CustomPage from './pages/CustomPage';
import Admin from './pages/Admin';
import User from './pages/User';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/user/:id" component={User} />
      <Route component={CustomPage} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
