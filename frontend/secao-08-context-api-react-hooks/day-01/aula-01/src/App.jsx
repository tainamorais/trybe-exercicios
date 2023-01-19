import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  // 1º parâmetro é o estado, o nome que irá armazenar dos dados
  // 2º parâmetro é o que permite atualizar o estado
  const [login, setLogin] = useState({
    userName: '',
    password: '',
    error: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value
    })
  };

  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState('');
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main className={ isDarkTheme ? 'main-dark' : 'main-light' }>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="userName">
          <input
            type="text"
            name='userName'
            placeholder='full name'
            value={ login.userName }
            onChange={ handleChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="userName">
          <input
            type="password"
            name='password'
            placeholder='password'
            value={ login.password }
            onChange={ handleChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="age">
        <input
            type="number"
            name='age'
            placeholder='age'
            value={ age }
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="city">
        <input
            type="text"
            name='city'
            placeholder='city'
            value={ location }
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <br />
        <button
          type='button'
          onClick={(event) => {
            event.preventDefault();
            console.log('Click!');
          }}
        >
          Entrar
        </button>
        <br />
        <br />
        <button
          type='button'
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Change Theme
        </button>
      </div>
    </main>
  )
};

export default App;