function TaskItem({ title, completed, children }) {
  return (
    <li className="border p-2 rounded mb-2 bg-white shadow">
      <div className="flex justify-between items-center">
        <span className={completed ? "line-through text-gray-500" : ""}>
          {title}
        </span>
        {children}
      </div>
    </li>
  );
}

export default TaskItem;
