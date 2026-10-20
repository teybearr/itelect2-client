import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

const STARTING_TASKS = [
  { id: 1, title: "Complete GT13 Activity", dueDate: "2026-10-21" },
  { id: 2, title: "Review for Midterm Exams", dueDate: "2026-10-25" },
  { id: 3, title: "Edit Trailer Video", dueDate: "2026-10-28" },
];

function App() {
  const addTask = (title) => {
    const newTask = { 
      id: Date.now(), 
      title: title, 
      dueDate: null 
    };
    setTasks([...tasks, newTask]);
  };

  const [tasks, setTasks] = useState(STARTING_TASKS);

  return (
    <main>
      <h1>Task Manager</h1>
      <p>{tasks.length} tasks listed</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;