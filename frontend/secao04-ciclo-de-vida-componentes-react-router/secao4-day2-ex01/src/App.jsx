import React, { Component } from 'react';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

// import { BrowserRouter } from 'react-router-dom';
// npm install react-router-dom@v5

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="div-main">
          <Sidebar />
          <Content />
        </div>
      </div>
    )
  }
}


export default App;
