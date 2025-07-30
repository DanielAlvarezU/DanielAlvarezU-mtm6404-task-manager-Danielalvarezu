import React from 'react';
import TaskItem from './TaskItem';
import Card from './Card';

function TaskList({ tasks = [], showCompleted, toggleCompletion, deleteTask }) {
  const priorityValue = {
    high: 1,
    medium: 2,
    low: 3
  };

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  const sortedTasks = [...filteredTasks].sort(
    (a, b) =>
      priorityValue[a.priority.trim().toLowerCase()] -
      priorityValue[b.priority.trim().toLowerCase()]
  );

  return (
    <Card>
      <h3>Task List</h3>
      {sortedTasks.length === 0 ? (
        <p>No tasks to show.</p>
      ) : (
        sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        ))
      )}
    </Card>
  );
}

export default TaskList;




