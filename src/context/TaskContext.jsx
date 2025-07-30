import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('taskData'));
    if (stored) {
      setLists(stored.lists || []);
      setSelectedListId(stored.selectedListId || null);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskData', JSON.stringify({ lists, selectedListId }));
  }, [lists, selectedListId]);

  const addList = (title) => {
    const newList = {
      id: Date.now().toString(),
      title,
      tasks: []
    };
    setLists((prev) => [...prev, newList]);
    setSelectedListId(newList.id);
  };

  const deleteList = (id) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
    if (selectedListId === id) setSelectedListId(null);
  };

  const selectList = (id) => {
    setSelectedListId(id);
  };

  const addTask = (text, priority) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === selectedListId
          ? {
              ...list,
              tasks: [
                ...list.tasks,
                {
                  id: Date.now(),
                  text,
                  priority,
                  completed: false
                }
              ]
            }
          : list
      )
    );
  };

  const toggleTask = (taskId) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === selectedListId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : list
      )
    );
  };

  const deleteTask = (taskId) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === selectedListId
          ? {
              ...list,
              tasks: list.tasks.filter((task) => task.id !== taskId)
            }
          : list
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        lists,
        selectedListId,
        selectedList: lists.find((l) => l.id === selectedListId),
        addList,
        deleteList,
        selectList,
        addTask,
        toggleTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

