import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <Body />
      </div>
    );
  }
}

export default App;
