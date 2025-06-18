const NavBar = () => (
  <nav className="navbar">
    <h1>D-NAL Task Manager</h1>
  </nav>
);

const TaskItem = ({ task }) => (
  <li className="task-item">{task}</li>
);

const TaskList = () => {
  const tasks = [
    "Plan streetwear photoshoot",
    "Post on Instagram",
    "Design new logo",
    "Order fabric samples",
    "Reply to influencer DMs"
  ];
  return (
    <section className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 D-NAL. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="container">
    <NavBar />
    <main>
      <h2>Welcome to the D-NAL Task Manager</h2>
      <p>Manage the brand like a pro.</p>
      <TaskList />
    </main>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
