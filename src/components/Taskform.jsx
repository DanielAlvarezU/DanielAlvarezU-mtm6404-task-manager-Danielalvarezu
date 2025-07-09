import React, { useState } from 'react';
import Card from './Card';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTask(text, priority);
    setText('');
    setPriority('Medium');
  };

  return (
    <Card>
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
}

export default TaskForm;

