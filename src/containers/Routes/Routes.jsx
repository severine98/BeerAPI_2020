import React, { Component } from 'react';
import {Router} from "@reach/router";
import Main from "../Main";
import Animals from "../Animals";
import Celebrities from "../Celebrities";
import Skulls from "../Skulls";

class Routes extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Main path="/"/>
        <Animals path="animals"/>
        <Celebrities path="celebrities"/>
        <Skulls path="skulls"/>
      </Router>
     )
  }
}
 
export default Routes;