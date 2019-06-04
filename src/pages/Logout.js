import React,{Component} from 'react';
import {Link} from "react-router-dom";
class Logout extends Component {
  render(){
    return (
      <div>
      <p className="custom-page-statement">
      You have logged out.Now can go to the home by link mentioned below.
      </p>
      <Link to={"/"} className="link-header">Home</Link>
      </div>
    );
  }
}

export default Logout;
