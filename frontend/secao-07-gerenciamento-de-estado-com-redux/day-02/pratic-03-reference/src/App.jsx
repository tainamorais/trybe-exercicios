import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import FormResult from './components/FormResult';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <FormResult />
      </div>
    )
  }
}

export default App;
