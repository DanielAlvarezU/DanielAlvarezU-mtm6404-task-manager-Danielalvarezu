import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/Taskform';

function TaskPage() {
  const { id } = useParams();
  const {
    selectList,
    selectedList,
    addTask,
    toggleTask,
    deleteTask
  } = useContext(TaskContext);

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    if (id) selectList(id);
  }, [id, selectList]);

  if (!selectedList) return <p>List not found.</p>;

  return (
    <div className="task-page">
      <h2>{selectedList.title}</h2>
      <TaskForm addTask={addTask} />
      <button onClick={() => setShowCompleted((prev) => !prev)}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button>
      <TaskList
        tasks={selectedList.tasks}
        showCompleted={showCompleted}
        toggleCompletion={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskPage;

