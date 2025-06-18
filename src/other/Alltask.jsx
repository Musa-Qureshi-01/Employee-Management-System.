import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Alltask = () => {

    const [userData, setUserData] =  useContext(AuthContext)

  return (
    <div   className='scroll-smooth bg-[#1C1C1C] p-5 rounded-lg mt-5 h-48  '>
        <div className='bg-teal-600 mb-2 py-2.5 px-4 flex justify-between rounded-sm'>
            <h2 className='w-1/5 tex-lg font-medium'>Employee Name</h2>
            <h5 className='w-1/5 tex-lg font-medium'>New Task</h5>
            <h5 className='w-1/5 tex-lg font-medium'>Active Task</h5>
            <h5 className='w-1/5 tex-lg font-medium'>Completed</h5>
            <h5 className='w-1/5 tex-lg font-medium'>Failed</h5>
        </div>
        <div id="Alltasks"  className='h-[80%]  overflow-auto'>
        {userData.map((elem, index)=>{
             return <div key={elem.id || index} className='bg-slate-600 mb-2 py-2.5 px-4 flex justify-between rounded-sm bg-transparent border-2 border-emerald-500'>
            <h2  className=' tex-lg font-medium w-1/5 '>{elem.firstname}</h2>
            <h3  className=' tex-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5  className=' tex-lg font-medium w-1/5 text-yellow-300'>{elem.taskCounts.active}</h5>
            <h5  className=' tex-lg font-medium w-1/5 text-gray-400'>{elem.taskCounts.completed}</h5>
            <h5  className=' tex-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        {/* <div className='bg-teal-600 mb-2.5 py-2 px-4 flex justify-between rounded-sm'>
            <h2>Musa</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-rose-600 mb-2.5 py-2 px-4 flex justify-between rounded-sm'>
            <h2>Musa</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-yellow-600 mb-2.5 py-2 px-4 flex justify-between rounded-sm'>
            <h2>Musa</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-600 mb-2.5 py-2 px-4 flex justify-between rounded-sm'>
            <h2>Musa</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-purple-300 mb-2.5 py-2 px-4 flex justify-between rounded-sm'>
            <h2>Musa</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-stone-700 mb-2.5 py-2 px-4 flex justify-between rounded-sm'>
            <h2>Musa</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div> */}
        
    </div>
  )
}

export default Alltask