import React, { createContext, useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import db from '../firebase';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLists = () => {
    const q = query(collection(db, 'lists'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLists(data);
      if (data.length > 0) {
        setSelectedListId(prev => prev || data[0].id);
      }
    });
    return unsub;
  };

  const fetchTasks = (listId) => {
    const q = query(collection(db, `lists/${listId}/tasks`), orderBy('priority'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(data);
    });
    return unsub;
  };

  useEffect(() => {
    const unsubLists = fetchLists();
    setLoading(false);
    return () => unsubLists();
  }, []);

  useEffect(() => {
    if (selectedListId) {
      const unsubTasks = fetchTasks(selectedListId);
      return () => unsubTasks();
    } else {
      setTasks([]);
    }
  }, [selectedListId]);

  const addList = async (title) => {
    try {
      const docRef = await addDoc(collection(db, 'lists'), {
        title,
        createdAt: serverTimestamp()
      });
      setSelectedListId(docRef.id);
    } catch (error) {
      console.error("❌ Error al agregar la lista:", error);
    }
  };

  const deleteList = async (id) => {
    try {
      await deleteDoc(doc(db, 'lists', id));
      if (id === selectedListId) {
        const remaining = lists.filter((list) => list.id !== id);
        setSelectedListId(remaining.length > 0 ? remaining[0].id : null);
      }
    } catch (error) {
      console.error("❌ Error al eliminar la lista:", error);
    }
  };

  const selectList = (id) => {
    setSelectedListId(id);
  };

  const addTask = async (text, priority) => {
    if (!selectedListId) return;
    try {
      await addDoc(collection(db, `lists/${selectedListId}/tasks`), {
        text,
        priority,
        completed: false,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("❌ Error al agregar la tarea:", error);
    }
  };

  const toggleTask = async (taskId, currentStatus) => {
    try {
      const ref = doc(db, `lists/${selectedListId}/tasks`, taskId);
      await updateDoc(ref, { completed: !currentStatus });
    } catch (error) {
      console.error("❌ Error al actualizar el estado de la tarea:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, `lists/${selectedListId}/tasks`, taskId));
    } catch (error) {
      console.error("❌ Error al eliminar la tarea:", error);
    }
  };

  const selectedList = lists.find((list) => list.id === selectedListId);

  return (
    <TaskContext.Provider
      value={{
        lists,
        selectedListId,
        selectedList,
        tasks,
        loading,
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
