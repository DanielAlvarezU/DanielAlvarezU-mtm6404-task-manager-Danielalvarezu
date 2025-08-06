Daniel Alvarez Urbina 
90541117079

# D-NAL Task Manager

This is my Capstone Iteration 04/05 project for the **Web Applications** course (MTM6404), created by **Daniel Alvarez Urbina** — ID: 90541117079.

It is a full-featured **task manager web app** built with **React 18** and **Vite**, featuring secure authentication, cloud hosting, and persistent data storage.

---

## 🌟 Live Demo

🔗 [Try the app on Firebase Hosting](https://your-firebase-link.web.app)  
🔗 [View the GitHub repo](https://github.com/DanielAlvarezU/DanielAlvarezU-mtm6404-task-manager-Danielalvarezu)

---

## ✅ Features

- **User Authentication with Firebase** (Google Sign-In)
- Create multiple task lists
- Add tasks with **text** and **priority** (High / Medium / Low)
- Tasks are sorted automatically by priority
- Mark tasks as complete or incomplete
- Delete individual tasks
- Toggle visibility of completed tasks
- Navigate between different lists
- Add or delete entire lists
- **URL reflects current list selection** and remains even after reload
- **Responsive design** for desktop & mobile
- All tasks and lists are **saved in localStorage**
- **Deployed with Firebase Hosting**

---

## ⚙️ How It Works

- Built using modular **React components**:
  - `Navbar`, `TaskForm`, `TaskList`, `TaskItem`, `Footer`, `AddListForm`, `ListSelector`, `TaskPage`
- Uses **React Router** for page navigation between task lists
- Global state is handled through the **Context API**
- Firebase **Authentication** allows users to sign in securely
- App is **deployed with Firebase Hosting**
- Uses **localStorage** to persist user task data (no backend needed)
- Built with clean architecture, reusable components, and responsive layout

---

## 🧰 Technologies Used

- **React 18**
- **Vite**
- **React Router DOM**
- **Context API**
- **Firebase Authentication**
- **Firebase Hosting**
- **HTML5 & CSS3**
- **localStorage** (for saving task data)

---

## 📁 Project Setup

To run locally:

```bash
npm install
npm run dev
## Notes

This project is part of the **MTM6404 Web Applications** course.  
Built by **Daniel Alvarez U.** to practice **event handlers, state, props, localStorage**, and reusable components.

---
