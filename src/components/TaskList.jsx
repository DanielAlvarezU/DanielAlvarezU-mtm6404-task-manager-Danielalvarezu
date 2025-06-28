import React from 'react';
import Card from './Card';

const tasks = [
  { id: 1, title: 'Plan streetwear photoshoot', completed: false },
  { id: 2, title: 'Post on Instagram', completed: true },
  { id: 3, title: 'Design new logo', completed: false },
  { id: 4, title: 'Order fabric samples', completed: true },
  { id: 5, title: 'Reply to influencer DMs', completed: false }
];

export default function TaskList() {
  return (
    <section className="task-section">
      <h3>Task List</h3>
      <div className="task-list">
        {tasks.map(task => (
          <Card key={task.id}>
            <div className="task-item">
              <span>{task.title}</span>
              {task.completed 
                ? <span className="status done">Completed ✅</span> 
                : <span className="status pending">Pending ⏳</span>
              }
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

