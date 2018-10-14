import React, { Component } from 'react';
import OneNewComp from './oneNew.js';

import '../../../styles/latestNewsThread.css';

class LatestNews extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div className="latestNewsContainer">
        <OneNewComp/>
      </div>
    );
  }
}

export default LatestNews;
