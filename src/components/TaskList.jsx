function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.dueDate ? task.dueDate : "No due date"}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;