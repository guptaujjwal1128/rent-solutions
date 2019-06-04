import React,{Component} from 'react';
import {Link} from "react-router-dom";
class CustomPage extends Component {
  render(){
    return (
      <div>
      <p className="custom-page-statement">
      This page does not exist.You can go back through link mentioned below.
      </p>
      <Link to="/" className="link-header">Home</Link>
      </div>
    );
  }
}

export default CustomPage;
