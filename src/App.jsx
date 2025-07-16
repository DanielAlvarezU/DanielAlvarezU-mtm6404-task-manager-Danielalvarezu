import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import TaskForm from './components/Taskform';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks && JSON.parse(storedTasks).length > 0) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleCompletion = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <>
      <Navbar />
      <main>
        <TaskForm addTask={addTask} />
        <button onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button>
        <TaskList
          tasks={tasks}
          showCompleted={showCompleted}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;






