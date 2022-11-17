import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';
import { QuizContext } from '../../Layoutes/Main';

const Statistics = () => {
  const quizes = useContext(QuizContext);
  return (
    <div className='my-10'>
      <h2 className='text-4xl text-center text-white'>Quiz <span className='text-violet-500 font-semibold'>Analysis</span> </h2>
      <div className='bg-gray-100 p-6 w-11/12 lg:w-7/12 mx-auto my-20 rounded-lg'>
        <ResponsiveContainer width="95%" height={400}>
          <LineChart className='rounded-lg' width={700} height={400} data={quizes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip labelClassName='text-violet-600 font-bold' />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
};

export default Statistics;