import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <section className="intro">
          <h2>Welcome to the D-NAL Task Manager</h2>
          <p>Manage your brand like a pro.</p>
        </section>
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;




