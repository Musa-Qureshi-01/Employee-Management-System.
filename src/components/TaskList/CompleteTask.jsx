import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-cyan-950 mr-7'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>{data.category}</h3>
            <h4 className='text-sm'>2{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription} <br /> <a href="/" className='text-black'>More About</a></p>
            <div className='mt-8'>
              <button className='w-full bg-blue-600 rounded-md py-1.5'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask