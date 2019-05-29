import React,{Component} from 'react';
import SearchAppBar from "../components/SearchAppBar";
import '../App.css';
class LandingPage extends Component {
  render(){
    return (
      <div>
      <SearchAppBar />
      <div className="back-ground">
      </div>
      </div>
    );
  }
}

export default LandingPage;
