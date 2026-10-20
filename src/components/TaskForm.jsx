import { useState } from "react";

function TaskForm({ onAdd }) { 
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => { e.preventDefault();
        const trimmed = title.trim(); if (trimmed === "")
            return; 
        onAdd(trimmed); 
        setTitle(""); 
    }; 
    return ( 
        <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New task title" />
        <button type="submit">Add task</button> </form> ); 
} 
        
export default TaskForm;