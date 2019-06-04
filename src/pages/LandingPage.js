import React,{Component} from 'react';
import Header from '../layout/Header';
import '../App.css';
import Body from '../layout/Body';
class LandingPage extends Component {
  render(){
    return (
      <div className="back-ground">
      <Header />
      <Body />
      </div>
    );
  }
}

export default LandingPage;
