import React from 'react';

const Options = ({ option, handleCorrectAnswer}) => {

  return (
    <div className='bg-violet-500 hover:bg-violet-900 focus:bg-violet-900 active:bg-violet-700  cursor-pointer  my-3 w-full md:w-9/12 mx-auto rounded-lg text-white font-semibold z-0 '>
      <label htmlFor={option}  className=' py-4 px-4 rounded-md mb-3 flex items-center cursor-pointer'>
        <input onClick= {() => handleCorrectAnswer(option)} type="radio" id={option} name="option" /><p className='pl-3 '>{option}</p>
      </label>
    </div>
  );
};

export default Options;