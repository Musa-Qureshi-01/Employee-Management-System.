import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-emerald-500 mr-7'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
<<<<<<< Updated upstream
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-3'>
        {data.taskDescription} <br /> 
=======
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTiltle}</h2>
      <p className='text-sm mt-3'>
        {data.taskDescription} <br />
>>>>>>> Stashed changes
        <a href="/" className='text-black'>More About</a>
      </p>
      <div className='mt-8'>
        <button className='w-full bg-slate-600 rounded-md py-1.5'>Failed</button>
      </div>
    </div>
<<<<<<< Updated upstream
  );
};

export default FailedTask;
=======
  )
}

export default FailedTask
>>>>>>> Stashed changes
