import React, { Component } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <main>
        <Sidebar />
        <div>
          <h1>HOME</h1>
        </div>
      </main>
      </>
    )
  }
}

export default Home;
