import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    const { dispatch, theme, nameTheme } = this.props;
    return (
      <div className={ theme }>
        <br />
        <br />
        <span>Conteúdo site</span>
        <button
          type='button'
          onClick={ () => dispatch({ type: 'CHANGE_THEME' }) }
        >
          { nameTheme }
        </button>
        <br />
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,  // a chave pode ser qualquer nome, mas usei o mesmo
  nameTheme: state.themeReducer.name,
});

export default connect(mapStateToProps)(Main);
