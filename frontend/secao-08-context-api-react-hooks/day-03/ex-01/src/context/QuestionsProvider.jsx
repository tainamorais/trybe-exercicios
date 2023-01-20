import React from 'react';
import { useState } from 'react';
import QuestonsContext from './QuestionsContext';

function QuestionsProvider({children}) {
  const [questions, setQuestions] = useState([
    {
      id: '1',
      name: 'Maria',
      question: 'Quanto é 2 + 2?',
      claps: 0
    },
    {
      id: '1',
      name: 'Maria',
      question: 'Quanto é 2 + 2?',
      claps: 0
    }
  ]);

  const contextValue = {
    questions
  }

  return (
    <QuestonsContext.Provider value={contextValue}>
      {children}
    </QuestonsContext.Provider>
  )
}


export default QuestionsProvider;
