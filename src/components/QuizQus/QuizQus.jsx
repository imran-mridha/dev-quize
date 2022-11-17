import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Ques from '../Ques/Ques';


const QuizQus = () => {
  const quizQusData = useLoaderData();
  const quizQus = quizQusData.data.questions;

  return (
    <div className='z-0'>
      <h2 className='text-white text-4xl text-center my-10 uppercase'>Quiz Topic : <span className='text-violet-600 font-bold '>{quizQusData.data.name}</span> </h2>
      {
        quizQus.map((ques, index) => <Ques key = {ques.id} ques = {ques} index = {index}/>)
      }
    </div>
  );
};

export default QuizQus;