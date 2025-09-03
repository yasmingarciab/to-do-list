import { useState } from 'react'
import './App.css'

interface Task  {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const novaTarefa: Task = {
      id: Date.now(),
      text: newTask,
      done: false,
    };

    setTasks([...tasks, novaTarefa]);
    setNewTask("");
  }

  const toggleTaskdone = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, done: !task.done} : task
    ))
  }

  return (
    <div>
        <h1>Yasmin's To-Do List</h1>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks around here...</p>
        ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}
            onClick={() => toggleTaskdone(task.id)} 
            style={{cursor: "pointer", textDecoration: task.done ? "line-through" : "none"}}>{task.text}</li>
          ))}
        </ul>
        )}
      </div>

      <div>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Add a new task...'/>
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  )
}

export default App
 