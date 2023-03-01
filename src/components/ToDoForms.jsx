import { useState } from "react";

function ToDoForms( {addTask} ) {
   const [taskInput, setInputTask] = useState('');
   const handleSubmit = function(e) {
      e.preventDefault();
      addTask(taskInput);
      setInputTask('');
   }
   const handleChange = function(e) {
      setInputTask(e.currentTarget.value)
   }

return (
   <form className="w-full" onSubmit={handleSubmit}>
      <input 
      className="text-black w-full p-3"
         type="text" 
         placeholder="Введите задачу" 
         onChange={handleChange} 
         value={taskInput}
      />
      <button className="w-full text-center font-bold bg-red-500 p-3">ADD</button>
   </form>
)
}

export default ToDoForms;