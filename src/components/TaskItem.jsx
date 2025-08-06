import React from 'react';

function TaskItem({ task, toggleCompletion, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className={`priority-dot ${task.priority.trim().toLowerCase()}`}></span>
          <strong>{task.text}</strong>
        </div>
        <span className={`priority ${task.priority.trim().toLowerCase()}`}>
          {task.priority}
        </span>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleCompletion(task.id, task.completed)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;


