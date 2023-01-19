import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className={theme.color}>
      <button
        type='button'
        onClick={() => theme.toggleTheme()}
      >
        {theme.color === 'dark' ? 'Mudar para tema light' : 'Mudar para tema dark'}
      </button>
      <h1>Trybe</h1>
    </header>
  )
}

export default Header;
