import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <button type="button">
          <img src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png" alt="" height={ 20 }/>
        </button>
        <img src="https://miro.medium.com/max/2400/1*_8rYOyJj9qiQsmeoVk3Gfg.png" alt="" height={ 50 }/>
        <h4>Trybe</h4>
      </header>
    )
  }
}

export default Header;
