import React, {useEffect, useState} from 'react'
import dele from './delete.png'

let arrDone=[];
let arrActive=[]
function Task(props,key) {
    useEffect(()=>{arrActive=[...props.arr];},[])
   const[del,setDel]=useState(true);
    const [check,setCheck]=useState(false)
    let cn;
    cn= check ? 'taskWin':'task-window';
    if(del)
    {
    return (
    <React.Fragment>
      <div className={cn}>
            <label >{props.task}</label>
            <input type='checkbox' id='task' onChange={()=>{
                if(!check) {
                    arrDone.push(props.task);
                    arrActive.splice(arrActive.indexOf(props.task),1);
                    props.ch1(arrDone);
                    props.ch2(arrActive); 
                    setCheck(true); 
                }
                if(check) { 
                    arrDone.splice(arrDone.indexOf(props.task),1);
                    if(!arrActive.includes(props.task)) 
                    {
                        arrActive.push(props.task);
                    }
                    props.ch1(arrDone);
                    props.ch2(arrActive); 
                    setCheck(false); 
                }}}/>
            <img src={dele} alt='Delete Task' onClick={()=>{setDel(false);} }/>
        </div>
    </React.Fragment>
  )}
  
}

export default Task
