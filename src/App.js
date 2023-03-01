import ToDo from "./components/ToDo";
import ToDoForms from "./components/ToDoForms";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);

  const addTask = function(taskInput) {
    if(taskInput) {
      const newItem = {
        id: Math.random().toString(35).substr(3, 7),
        task: taskInput,
        complete: false,
      }
      setTask([...tasks, newItem])
    }
  }

  const removeTask = function(id) {
    setTask([...tasks.filter((task) => task.id !== id)])
  }

  const handleToggle = function(id) {
    setTask([
      ...tasks.map((task) => 
        task.id === id ? {...task, complete: !task.complete} : {...task}
    )
    ])
  }

  return (
    <div className="app text-white flex flex-col items-center m-auto px-2 max-w-[400px]">
      <h1 className="text-3xl font-bold my-5">ToDo List: {tasks.length}</h1>
      <ToDoForms addTask = {addTask}/>
      {tasks.map((task) => {
        return(
          <ToDo key={task.id} task = {task} removeTask = {removeTask} handleToggle = {handleToggle}/>
        )
      })}
    </div>
  );
}

export default App;
