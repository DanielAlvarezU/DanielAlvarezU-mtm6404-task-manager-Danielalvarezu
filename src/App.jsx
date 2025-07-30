import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskPage from './pages/TaskPage';
import ListSelector from './components/ListSelector';
import AddListForm from './components/AddListForm';
import { TaskContext } from './context/TaskContext';

function App() {
  const { selectedListId } = useContext(TaskContext);

  return (
    <Router>
      <Navbar />
      <main className="app">
        <AddListForm />
        <ListSelector />
        <Routes>
          <Route
            path="/"
            element={
              selectedListId ? (
                <Navigate to={`/lists/${selectedListId}`} replace />
              ) : (
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Create or select a list to get started.
                </p>
              )
            }
          />
          <Route path="/lists/:id" element={<TaskPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;







