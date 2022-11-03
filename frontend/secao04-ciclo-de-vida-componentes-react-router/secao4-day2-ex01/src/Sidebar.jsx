import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <section className="nav-section">
        <h4 id="curso-title">Curso</h4>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lectures">Aulas ao Vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </section>
    )
  }
}

export default Sidebar;
