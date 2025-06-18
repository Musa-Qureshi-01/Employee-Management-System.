import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-teal-500 mr-7'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className='flex items-center justify-between'>
              <button className='hover:bg-green-800 mt-5 py-1.5 px-2 text-xs border-4 border-green-800 bg-green-600 rounded-lg'>Mark as Completed</button>
              <button className='hover:bg-red-800 mt-5 py-1.5 px-2 text-xs border-4 border-red-800 bg-red-500 rounded-lg'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask