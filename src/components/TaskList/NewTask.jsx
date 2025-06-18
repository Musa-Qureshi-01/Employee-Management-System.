import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-cyan-500 mr-7'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className='mt-5 flex items-start justify-between'>
              <button className='hover:bg-green-800 mt-5 py-1.5 px-3 text-xs border-4 border-green-800 bg-green-600 rounded-lg'>Accept</button>
              <button className='hover:bg-red-800 mt-5 py-1.5 px-2 text-xs border-4 border-red-800 bg-red-600 rounded-lg'>Can't Reject</button>
            </div>
        </div>
  )
}

export default NewTask