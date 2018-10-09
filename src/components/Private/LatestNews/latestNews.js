import React, { Component } from 'react';
import OneNewComp from './oneNew.js';

import '../../../styles/latestNewsThread.css';

class LatestNews extends Component{
  render() {
    return (
      <div className="latestNewsContainer">
        <OneNewComp/>
        Latest news thread
      </div>
    );
  }
}

export default LatestNews;
