import React from 'react'
import { setLocalStoarge } from '../utils/localStorage'

const TaskListNum = ({data}) => {

  return (
    <div className='flex mt-16 justify-between gap-5 screen'>
      <div className=' rounded-xl w-[40%] py-6 px-10 bg-blue-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' rounded-xl w-[40%] py-6 px-10 bg-gray-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
      <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className=' rounded-xl w-[40%] py-6 px-10 bg-pink-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
      <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className=' rounded-xl w-[40%] py-6 px-10 bg-rose-500'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
      <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNum