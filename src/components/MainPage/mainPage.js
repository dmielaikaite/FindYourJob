import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

class MainPage extends Component{
  render() {
    return (
      <div className="mainPageContent">
        <Image src={'/src/assets/mountains.png'} responsive />
      </div>
    );
  }
}

export default MainPage;
