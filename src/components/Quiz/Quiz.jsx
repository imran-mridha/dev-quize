import React from 'react';
import {Link} from 'react-router-dom';

const Quiz = ({ quiz }) => {
  const {id, logo, name, total } = quiz;
  return (
    <div className='bg-gray-50 p-5 rounded-lg shadow-2xl'>
      <img className='border border-gray-300 rounded-lg bg-violet-500 w-11/12 md:w-full mx-auto' src={logo} alt="" />
      <div className='flex justify-between my-10 p-2 rounded text-xl'>
        <p>{name}</p>
        <p>Quiz: {total}</p>
      </div>
      <div>
      <Link to={`/quiz/${id}`}>
        <button className='bg-violet-500  hover:bg-violet-700 w-full py-2 rounded-lg text-white text-xl font-semibold'> Start Quiz <span className='mx-2'></span> 
        </button>
      </Link> 
      </div>
    </div>
  );
};

export default Quiz;