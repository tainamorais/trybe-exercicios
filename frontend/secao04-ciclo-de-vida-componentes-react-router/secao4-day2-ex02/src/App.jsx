import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/howto" component={HowTo} />
        <Route exact path="/profile/:prof" render={(props) => <Profile {...props} name="Tainá" />} />
      </BrowserRouter>
    )
  }
}


export default App;
