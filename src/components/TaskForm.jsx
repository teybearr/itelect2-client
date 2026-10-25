import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (trimmed === "") return;

    try {
      await onAdd(trimmed);
      setTitle("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task title"
      />
      <button type="submit">Add task</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default TaskForm;