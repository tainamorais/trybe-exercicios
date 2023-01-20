import React from 'react';
import { useHistory } from 'react-router-dom';
import QuestionList from '../../components/QuestionList/QuestionList';

function QuestionListPage() {
  const history = useHistory();

  const goToNewQuestion = () => {
    history.push('/new-question');
  };

  return (
    <section>
      <QuestionList />
      <button type='button' onClick={ goToNewQuestion }>
        Nova Pergunta
      </button>
    </section>
  )
}

export default QuestionListPage;