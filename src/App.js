import React, { Component } from 'react';

import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js'
import MainPage from './components/MainPage/mainPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
