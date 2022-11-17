import React from 'react';
import Lottie from 'lottie-react';
import reader from '../../assets/quiz-program.json'

const Hero = () => {
  return (
    <div>
      <div className=' grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto'>
        <div className='flex flex-col  justify-center'>
          <div>
            <h2 className='text-4xl text-white font-semibold uppercase'>WellCome To Dev<span className='text-violet-500'>Quiz</span> </h2>
            <p className='py-5 text-white text-xl w-full lg:w-9/12'>Dev Quiz provides challenges for several different topics such as React, Javascript, CSS, Git and more. You can test your knowledge directly online.</p>
          </div>
        </div>
        <div className='flex justify-end'>
          <Lottie className='w-[500px] mx-auto' animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;