import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/header';
import Body from './components/Body';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Footer />
        <Body />
      </div>
    );
  }
}

export default App;
