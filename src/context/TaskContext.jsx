import React, { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false); 

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('taskData'));
    if (storedData) {
      console.log('📦 Cargando desde localStorage:', storedData);
      setLists(storedData.lists || []);
      setSelectedListId(storedData.selectedListId || null);
    }
    setHasLoaded(true); 
  }, []);

  
  useEffect(() => {
    if (!hasLoaded) return;
    const data = { lists, selectedListId };
    console.log('💾 Guardando en localStorage:', data);
    localStorage.setItem('taskData', JSON.stringify(data));
  }, [lists, selectedListId, hasLoaded]);

  
  const addList = (title) => {
    const newList = {
      id: Date.now().toString(),
      title,
      tasks: [],
    };
    setLists((prev) => [...prev, newList]);
    setSelectedListId(newList.id);
  };

  
  const deleteList = (id) => {
    setLists((prev) => {
      const newLists = prev.filter((list) => list.id !== id);
      
      if (id === selectedListId) {
        setSelectedListId(newLists.length > 0 ? newLists[0].id : null);
      }
      return newLists;
    });
  };

  
  const selectList = (id) => {
    setSelectedListId(id);
  };

  
  const addTask = (text, priority) => {
    if (!selectedListId) return;

    const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };

    setLists((prev) =>
      prev.map((list) =>
        list.id === selectedListId
          ? { ...list, tasks: [...list.tasks, newTask] }
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
              ),
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
              tasks: list.tasks.filter((task) => task.id !== taskId),
            }
          : list
      )
    );
  };

  const selectedList = lists.find((list) => list.id === selectedListId);

  return (
    <TaskContext.Provider
      value={{
        lists,
        selectedListId,
        selectedList,
        addList,
        deleteList,
        selectList,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

