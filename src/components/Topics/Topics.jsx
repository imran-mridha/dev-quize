import React, { useContext } from 'react';
import { QuizContext } from '../../Layoutes/Main';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
  const quizes = useContext(QuizContext);
  return (
    <div className='px-10 py-20'>
      <h2 className='text-white text-2xl uppercase font-semibold text-center border-b border-violet-500 pb-4 lg:w-2/4 mx-auto'>Choose a topic to test your knowledge</h2>
      <div className='pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {
          quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
        }
      </div>
    </div>
  );
};

export default Topics;