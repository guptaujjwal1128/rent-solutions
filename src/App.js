import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Logout from './pages/Logout';
import CustomPage from './pages/CustomPage';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/logout" component={Logout} />
      <Route component={CustomPage} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
