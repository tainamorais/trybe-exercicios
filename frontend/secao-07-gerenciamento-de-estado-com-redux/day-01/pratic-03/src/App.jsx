import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { estadoQualquer, estadoQualquer2 } = this.props;
    return (
      <div>
      <h1>Configurando Redux</h1>
      <h2>Instalações</h2>
      <ol>
        <li>npx create-react-app + . ou nome-pasta</li>
        <li>npm install react-router-dom@v5</li>
        <li>npm install redux react-redux</li>
        <li>npm install redux-devtools-extension</li>
      </ol>
      <h2>Imports</h2>
      <ol>
        <li>import / legacy_createStore as createStore / from 'redux'; --entre chaves</li>
        <li>import / composeWithDevTools / from 'redux-devtools-extension'; --entre chaves</li>
      </ol>
      <h3>{estadoQualquer}</h3>
      <h3>{estadoQualquer2}</h3>
    </div>
    )
  }
}

const mapStateProps= (state) => ({
  estadoQualquer: state.test,
  estadoQualquer2: state.outroTest,
})

export default connect(mapStateProps)(App);
