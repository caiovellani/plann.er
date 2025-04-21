# Plann.er 📅 – Backend API (Node.js)

**Plann.er** is the backend API for a task and event planner application. Built with **Node.js** and **Express**, it provides all necessary endpoints for user authentication, task management, scheduling, and notifications.

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database for storing users, tasks, and events
- **Mongoose** – ODM for MongoDB
- **JWT (JSON Web Token)** – Authentication via token-based system
- **bcrypt** – For password hashing
- **dotenv** – To manage environment variables

## ✨ Features

- User registration and login with JWT authentication
- Secure password encryption with bcrypt
- Create, read, update, and delete (CRUD) tasks and events
- Task scheduling with due dates and priority
- Middleware for authentication and error handling
- RESTful API structure
- Scalable and clean codebase

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (local or Atlas)
- A tool like Postman for testing endpoints

### Installation

### Clone the repo
```bash
git clone https://github.com/caiovellani/plann.er.git
cd plann.er
```

### Install dependencies
```bash
npm install
```

### Create a .env file with your environment variables
```bash
cp .env.example .env
```

### Example .env configuration
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/planner
JWT_SECRET=your_jwt_secret
```

### Run the server
```bash
npm run dev
```
