'use client'
import React, { useState } from 'react'

const page = () => {
  //Variables to store task title and description-->
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  //array to store all the tasks
  const [mainTask, setmainTask] = useState([])
  //function to store the form data
  const submitHandler=(e)=>{
    e.preventDefault();
    settitle(title);
    setdesc(desc);
    setmainTask([...mainTask,{title,desc}]);
    settitle('');
    setdesc('');
  }
  //function to delete a task
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }
  //Viewing Saved Tasks
  let renderTasks=<h2>No Task Available</h2>;
  if(mainTask.length>0){
    renderTasks=mainTask.map((t,i)=>{
      return (
        <li 
          key={i}
          className='flex items-center justify-between mb-5'
        >
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>
              {t.title}
            </h5>
            <h6 className='text-xl font-semibold'>
              {t.desc}
            </h6>
          </div>
          <button 
            className='bg-red-400 text-white rounded font-bold px-4 py-2'
            onClick={()=>{
              deleteHandler(i)
            }}
            >
            Delete
          </button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white font-bold text-center text-2xl'>Todo List</h1>
      <form 
        className='m-8'
        onSubmit={submitHandler}
      >
        <input 
          type='text'
          className='border-4 border-black m-8 px-4 py-2'
          placeholder='Enter the title'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input 
          type='text'
          className='border-4 border-black m-8 px-4 py-2'
          placeholder='Enter the description'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button 
          className='bg-black text-white rounded font-bold text-2xl px-4 py-2'
        >
          Add Task
        </button>
      </form>
      <hr/>
      <div className='bg-slate-200 p-8'>
          <ul>
            {renderTasks}
          </ul>
      </div>
    </>
  )
}

export default page