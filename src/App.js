import './App.css';
import delAll from './deleteAll.png'
import Task from './Task';
import './styles.css'
import { useState } from 'react';

const arrTask=[];

function App() {
  const[task,setTask]=useState();
  const[submit,setSubmit]=useState(false);
  const[deleteAll,setDeleteAll]=useState(false);
  const[active,setActive]=useState(false);
  const [done,setDone]=useState(false);
  const [all,setAll]=useState(false);
  const [arrayDone,setArrayDone]=useState([]);
  const [arrayActive,setArrayActive]=useState([]);

  if(deleteAll){
    arrTask.splice(0);
    setDeleteAll(false)
  }

  const ch1=(arrayDone)=>
  {
    setArrayDone(arrayDone)
  }
  const ch2=(arrayActive)=>
  {
    setArrayActive(arrayActive)
  }


  const displayTask=()=>{
    if(done)
    {
      return (arrayDone.length>0) ? 
        arrayDone.map((item,index)=><Task task={item} key={index}   arr={arrTask} ch1={ch1} ch2={ch2}/>) 
        : 
        (<p>No Tasks Completed Yet..</p>)
    }
    if(active)
    {
      return (arrayActive.length>0) ? 
        arrayActive.map((item,index)=><Task task={item}  key={index}  arr={arrTask} ch1={ch1} ch2={ch2}/>) 
        : 
        (<p>All Done!!</p>)

    }
    if(all){
    return ((arrTask.length>0 && submit===true ) ? 
      arrTask.map((item,index)=><Task task={item}  key={index} stask ={setTask}   arr={arrTask} ch1={ch1} ch2={ch2}/>) 
      : 
      (<p>No Tasks Added Yet..</p> ))}
    
    return ((arrTask.length>0 && submit===true ) ? 
      arrTask.map((item,index)=><Task task={item}  key={index} stask ={setTask}  arr={arrTask} ch1={ch1} ch2={ch2}/>) 
      : 
      (<p>No Tasks Added Yet..</p>))
  }
  return (
    <div className="App">
        <div className='heading-bar'>
          <h1>To-do</h1>
          <img src={delAll} title='Delete All' alt='Delete All'onClick={()=>setDeleteAll(true)}/>

          <button onClick={()=>{if(!all) setAll(true);
          //  if(all) setAll(false)
            }}>All</button>

          <button onClick={()=>{if(!done) setDone(true);
          //  if(done) setDone(false)
           }}>Done</button>

          <button onClick={()=>{if(!active) setActive(true);
          //  if(active) setActive(false)
           }}>Active</button>
        </div>
        <form className='input-task-window' onSubmit={(e)=>{arrTask.push(task); 
              setTask(null)
              setSubmit(true)
              e.preventDefault()}}>
            <input type='text' placeholder='Enter Task' onChange={(e)=>{
              setTask(e.target.value);
              }}/>
            <br />
            <button type='submit'> Add new task </button>
        </form>
        <div className='task'>
          {displayTask()}
        </div>
    </div>
  );
}

export default App;
