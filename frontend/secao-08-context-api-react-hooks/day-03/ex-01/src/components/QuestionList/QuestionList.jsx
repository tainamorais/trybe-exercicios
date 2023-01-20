import React, { useContext } from 'react';
// import QuestionCard from '../QuestionCard/QuestionCard';
import QuestonsContext from '../../context/QuestionsContext';

function QuestionList() {
  const { questions } = useContext(QuestonsContext);

  console.log('buscar as questões do estado global')

  return (
    <section>
      {questions.map((question, index) => (
        <ul key={index}>
          <li>
            <p>{question.id}</p>
            <p>{question.name}</p>
            <p>{question.question}</p>
            <p>{question.claps}</p>
          </li>
        </ul>
        // <QuestionCard key={index} question={question} />
      ))}
    </section>
  )
}

export default QuestionList;
