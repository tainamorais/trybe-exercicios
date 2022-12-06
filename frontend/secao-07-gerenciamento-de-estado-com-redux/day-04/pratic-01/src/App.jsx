import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ISSLocation />
      </div>
    )
  }
}

export default App;
