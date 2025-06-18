import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    
  return (
    <div id='TaskList' className='h-[53%] overflow-auto flex items-center justify-start w-full py-5 mt-12 flex-nowrap '>
        {data.tasks.map((elem,idx) => {
           
            if(elem.active) {
            return <AcceptTask key={idx}  data={elem} />
            }
            if(elem.completed) {
                return <CompleteTask key={idx}  data={elem}  />
            }
            if(elem.newTask){
                return <NewTask  key={idx}  data={elem} />
            }
            if(elem.failed){
                return <FailedTask key={idx}  data={elem}  />
            }

        })}

        {/* <NewTask />
        <CompleteTask />
        <FailedTask /> */}
        
        
        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-yellow-500 mr-7'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>High</h3>
            <h4 className='text-sm'>29 Dec, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Learn ReactJS </h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem possimus, impedit beatae, animi hic est, tempore unde dolorem. A provident esse praesentium exercitationem consequatur nesciunt.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-blue-500 mr-7'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>High</h3>
            <h4 className='text-sm'>29 Dec, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Learn ReactJS </h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem possimus, impedit beatae, animi hic est, tempore unde dolorem. A provident esse praesentium exercitationem consequatur nesciunt.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-lg bg-green-500 mr-7'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-lg'>High</h3>
            <h4 className='text-sm'>29 Dec, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Learn ReactJS </h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem possimus, impedit beatae, animi hic est, tempore unde dolorem. A provident esse praesentium exercitationem consequatur nesciunt.</p>
        </div> */}

    </div>
  )
}

export default TaskList