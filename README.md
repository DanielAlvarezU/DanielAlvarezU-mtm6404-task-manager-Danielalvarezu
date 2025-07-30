Daniel Alvarez Urbina 
90541117079

# D-NAL Task Manager

This is my Capstone Iteration 04 project for the Web Applications course (MTM6404).

It is a task manager built with React 18 and Vite, featuring improved functionality and data persistence.

---

## What does it do?

- Allows creating multiple task lists.
- Lets you add tasks with text and priority (High, Medium, or Low).
- Tasks are displayed sorted by priority (High first, then Medium, then Low).
- You can mark tasks as complete or incomplete.
- You can delete tasks.
- You can toggle showing or hiding completed tasks with a button.
- Displays only one list at a time and lets you navigate between lists.
- You can add new lists and delete existing lists.
- The app remembers the selected list even after refreshing or sharing the URL.
- All data is saved to `localStorage` so tasks and lists persist on page reload.
- Responsive design works well on desktop and mobile devices.

---

## How does it work?

- Built with React components like `Navbar`, `TaskForm`, `TaskList`, `TaskItem`, `Footer`, `AddListForm`, `ListSelector`, and `TaskPage`.
- Uses React Router for routing and navigation between different lists.
- Utilizes React Context API for global state management of lists, tasks, and current selection.
- Implements conditional rendering and list rendering for dynamic UI.
- Employs the `children` prop for reusable components and clean structure.
- Saves and retrieves lists, tasks, and selected list from `localStorage` for persistence.

---

## Technologies

- React 18  
- Vite  
- React Router DOM  
- HTML5 & CSS3 (custom styling)  
- Context API  
- LocalStorage for persistence

---

## Notes

This project is part of the **MTM6404 Web Applications** course.  
Built by **Daniel Alvarez U.** to practice **event handlers, state, props, localStorage**, and reusable components.

---
