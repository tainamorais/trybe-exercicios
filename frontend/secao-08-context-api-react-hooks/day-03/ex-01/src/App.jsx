import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewQuestionPage from './pages/NewQuestionPage/NewQuestionPage';
import QuestionListPage from './pages/QuestionListPage/QuestionListPage';
import QuestionsProvider from './context/QuestionsProvider';
import './App.css';

function App() {
  const goToHome = () => {
    console.log('Implementar goToHome')
  };

  return (
    <QuestionsProvider>
      <main className="App">
        <header>
          <button onClick={ goToHome } type='button'>
            Trybe Questions
          </button>
        </header>
        <section>
          <Switch>
            <Route path="/new-question" component={ NewQuestionPage }/>
            <Route path="/" component={ QuestionListPage }/>
          </Switch>
        </section>
      </main>
    </QuestionsProvider>
  );
}

export default App;
