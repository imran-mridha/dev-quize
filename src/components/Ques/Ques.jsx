import { toast } from 'react-toastify';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Ques = ({ ques,index }) => {
  
  const correctAnswer = ques.correctAnswer;

  const handleCorrectAnswer = option => {
    if (option === correctAnswer) {
      toast.success('Wow!! Correct Answer !!', { autoClose: 500 })
    } else {
      toast.error('Opps!! Wrong Answer !!', { autoClose: 500 })
    }
  }
  const showCorrectAnswer = (correctAnswer) => {
    toast.info(`Coreect Ans:  ${correctAnswer}`, { autoClose: 2000 })
  }
  return (
    <div className=' bg-violet-200 text-black mb-10 p-10 w-11/12 lg:w-6/12 mx-auto rounded-lg relative z-0'>
      <EyeIcon onClick={() => showCorrectAnswer(correctAnswer)} className="h-6 w-6 text-violet-500 absolute top-5 right-5 cursor-pointer" />
      <div className='mb-10'>
        <span className='text-2xl text-violet-500 font-semibold'>Quiz {index + 1} : </span>
        <span className='text-2xl mb-10'>{ques.question.slice(3,-4)}</span>
      </div>
      <div className=''>
        {
          ques.options.map((option, idx) => <Options key={idx} option={option} handleCorrectAnswer={handleCorrectAnswer}/>)
        }
      </div>
    </div>
  );
};

export default Ques;