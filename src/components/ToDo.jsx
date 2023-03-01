import { useState } from "react";

function ToDo ( {task, removeTask, handleToggle} ) {
   return (
         <div className="w-full bg-slate-800 flex justify-between my-3 p-2 rounded-2xl border-solid border-2 border-blue-500" key={task.id}>
         <div className={task.complete ? 'cursor-pointer line-through text-green-500 text-2xl' 
         : 'cursor-pointer text-2xl'} onClick={() => handleToggle(task.id)}>
         {task.task}
         </div>
         <button className="bg-blue-500 p-2 rounded-2xl" onClick={() => removeTask(task.id)}>DELETE</button>
      </div>
   )
}

export default ToDo;