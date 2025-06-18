import React, { useContext, useState } from 'react'
import TaskList from '../components/TaskList/TaskList'
import NewTask from '../components/TaskList/NewTask'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
   
  
  const [userData, setUserData] =  useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setNewTask({taskTitle, taskDate, category, assignTo, taskDescription, active:false, newTask:true, completed:false, failed:false})
    // console.log(task)

    const data = userData.employees

    if (Array.isArray(data)) {
      data.forEach((elem) => {
          if (assignTo === elem.firstname) {
              elem.tasks.push(newTask);
              elem.taskCounts.newTask += 1;
          }
      });
      setUserData({ ...userData, employees: data });
  } else {
      console.error('No employees data found');
  }

    setUserData(data)
   
    

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className='p-6 bg-[#1C1C1C] mt-10 rounded '>
    <form onSubmit={(e, data) => {
      submitHandler(e)
      if (Array.isArray(data)) {
        data.forEach((item) => {
            console.log(item);
        });
    } else {
        console.error("data is not an array or is undefined");
    }
    }} 
    className="flex w-full flex-wrap items-start justify-between ">
      <div className='w-1/2'>
        <div>
            <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
            <input value={taskTitle} onChange={(e) => {
              setTaskTitle(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-200 mb-4' type="text" placeholder="Make UI Design " />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
          <input value={taskDate} onChange={(e) => {
              setTaskDate(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-200 mb-4' type="Date" />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-1'>Assign To</h3>
          <input value={assignTo} onChange={(e) => {
              setAssignTo(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-200 mb-4' type="text" placeholder="Employee Name" />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
          <input value={category} onChange={(e) => {
              setCategory(e.target.value)
            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-200 mb-4' type="text" placeholder="Software, UI, DevO etc" />
        </div>
      </div>

      <div value={taskDescription} 
          onChange={(e) => {
            setTaskDescription(e.target.value)
          }}
       className='w-1/3 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-1'>Description </h3>
        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none border-2 border-gray-400 mb-4 bg-transparent'cols="30" rows="10"></textarea>
        <button className='bg-emerald-600 py-3 hover:bg-emerald-700 border-3 border-gray-400  px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </div>
      
    </form>
  </div>
  )
}

export default CreateTask